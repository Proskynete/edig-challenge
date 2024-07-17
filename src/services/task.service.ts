import { getTasksQuery } from '@/actions/tasks.action';

export const getAll = async () => {
	return getTasksQuery();
};

export const TaskServices = {
	getAll,
};
