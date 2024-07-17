import TasksPlaceholder from '@/app/_placeholders/tasks.placeholder';
import { Task as ITask } from '@/types/task.types';

interface TaskProps {
	task: ITask & { preview?: boolean };
}

export const Task = ({ task }: TaskProps) => {
	return task.preview ? (
		<TasksPlaceholder />
	) : (
		<article className="w-full border border-slate-900 flex p-4 rounded-lg">{task.title}</article>
	);
};
