'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useCreateTask } from '@/hooks/useCreateTask';

export default function CreateNewTask() {
	const [task, setTask] = useState<string>('');
	const { mutate, isPending } = useCreateTask();

	const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = async () => {
		mutate({ title: task });
		setTask('');
	};

	return (
		<section className="w-full flex flex-col lg:flex-row items-end justify-center gap-2">
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
			<Button onClick={handleAddTask} disabled={!task || isPending} className="mb-[2px] w-full lg:w-fit">
				Agregar
			</Button>
		</section>
	);
}
