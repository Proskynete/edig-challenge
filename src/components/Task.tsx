import TasksPlaceholder from '@/app/_placeholders/tasks.placeholder';
import { useDeleteTask } from '@/hooks/useDeleteTask';
import { useToggleComplete } from '@/hooks/useToggleComplete';
import { Task as ITask } from '@/types/task.types';

import Button from './Button';

interface TaskProps {
	task: ITask & { preview?: boolean };
}

export const Task = ({ task }: TaskProps) => {
	const { mutate: toggleComplete } = useToggleComplete();
	const { mutate: removeTask } = useDeleteTask();

	const handleTaskToggle = () => {
		toggleComplete({
			uuid: task.uuid,
			is_completed: !task.is_completed,
		});
	};

	const handleRemoveTask = () => {
		removeTask(task.uuid);
	};

	return task.preview ? (
		<TasksPlaceholder />
	) : (
		<article className="w-full border border-slate-900 flex p-4 rounded-lg justify-between items-center">
			<div className="flex items-center space-x-3">
				<input
					type="checkbox"
					className="border-gray-300 rounded h-5 w-5 cursor-pointer"
					checked={!!task.is_completed}
					onChange={handleTaskToggle}
				/>

				<div className="flex flex-col">
					<h1 className={`text-gray-700 font-medium leading-none ${!!task.is_completed ? 'line-through' : ''} `}>
						{task.title}
					</h1>
					<time className="text-xs text-gray-500 mt-1 leading-4" dateTime={task.created_at.toISOString()}>
						Creado el {task.created_at.toLocaleDateString()} a las{' '}
						{task.created_at.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
					</time>
				</div>
			</div>
			<div>
				<Button appearance="danger" variant="outline" size="sm" onClick={handleRemoveTask}>
					Eliminar
				</Button>
			</div>
		</article>
	);
};
