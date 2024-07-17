import { v4 as uuidv4 } from 'uuid';

import { createNewTaskQuery, getTasksQuery } from '@/actions/tasks.action';
import { Task } from '@/types/task.types';

export const getAll = async () => {
	return getTasksQuery();
};

export const useNewTask = async ({ title }: Pick<Task, 'title'>) => {
	return createNewTaskQuery({ uuid: uuidv4(), title });
};

export const TaskServices = {
	getAll,
	createNewTask: useNewTask,
};
