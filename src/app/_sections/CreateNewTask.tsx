'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { TaskServices } from '@/services/task.service';
import { Task } from '@/types/task.types';
import { TASKS } from '@/utils/constants';

export default function CreateNewTask() {
	const [task, setTask] = useState<string>('');
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: TaskServices.createNewTask,
		onMutate: async (newTask) => {
			await queryClient.cancelQueries({ queryKey: [TASKS.GET_ALL] });
			const previousTasks = queryClient.getQueryData([TASKS.GET_ALL]);
			queryClient.setQueryData([TASKS.GET_ALL], (old: Task[]) => [
				{ ...newTask, uuid: Math.random(), preview: true },
				...old,
			]);
			return { previousTasks };
		},
		onError: (error, variables, context) => {
			queryClient.setQueryData([TASKS.GET_ALL], context?.previousTasks);
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: [TASKS.GET_ALL] });
		},
	});

	const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = async () => {
		mutate({ title: task });
		setTask('');
	};

	return (
		<section className="w-full flex items-end justify-center gap-2">
			<Input
				id="new-task"
				name="new-task"
				type="text"
				label="¿Qué vas a hacer hoy?"
				placeholder="Hoy voy a..."
				value={task}
				onChange={handleChangeTask}
				disabled={isPending}
			/>
			<Button onClick={handleAddTask} disabled={!task || isPending} className="mb-[2px]">
				Agregar
			</Button>
		</section>
	);
}
