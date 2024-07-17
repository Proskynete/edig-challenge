import { Task as ITask } from '@/types/task.types';

interface TaskProps {
	task: ITask;
}

export const Task = ({ task }: TaskProps) => {
	return <article className="w-full border border-slate-900 flex p-4 rounded-lg">{task.id}</article>;
};
