'use client';

import { useQuery } from '@tanstack/react-query';

import { Task } from '@/components/Task';
import { useGetTaskList } from '@/hooks/useGetTaskList';

import TasksPlaceholder from '../_placeholders/tasks.placeholder';

export default function TaskList() {
	const { data, isLoading, isError } = useGetTaskList();

	return (
		<section className="w-full flex flex-col gap-4">
			<h2 className="font-bold">Tareas pendientes</h2>

			{isLoading && [...Array(3)].map((_, index) => <TasksPlaceholder key={index} />)}
			{isError && <p>Ha ocurrido un error.</p>}

			{!isLoading && !isError && (
				<>
					{!data?.length ? (
						<p>No tienes tareas pendientes.</p>
					) : (
						data.map((task) => <Task key={task.uuid} task={task} />)
					)}
				</>
			)}
		</section>
	);
}
