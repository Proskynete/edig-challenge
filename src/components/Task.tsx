import TasksPlaceholder from '@/app/_placeholders/tasks.placeholder';
import { Task as ITask } from '@/types/task.types';

import Button from './Button';

interface TaskProps {
	task: ITask & { preview?: boolean };
}

export const Task = ({ task }: TaskProps) => {
	return task.preview ? (
		<TasksPlaceholder />
	) : (
		<article className="w-full border border-slate-900 flex p-4 rounded-lg justify-between items-center">
			<div className="flex items-center space-x-3">
				<input type="checkbox" className="border-gray-300 rounded h-5 w-5" />

				<div className="flex flex-col">
					<h1 className={`text-gray-700 font-medium leading-none ${task.is_hidden} ? "line-through" : ""`}>
						{task.title}
					</h1>
					<time className="text-xs text-gray-500 mt-1 leading-4" dateTime={task.created_at.toISOString()}>
						Creado el {task.created_at.toLocaleDateString()} a las {task.created_at.toLocaleTimeString()}
					</time>
				</div>
			</div>
			<div>
				<Button appearance="danger" variant="outline" size="sm">
					Eliminar
				</Button>
			</div>
		</article>
	);
};
