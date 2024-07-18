import { v4 as uuidv4 } from 'uuid';

import { createNewTaskQuery, deleteTaskQuery, editTaskQuery, getTasksQuery } from '@/actions/tasks.action';
import { Task } from '@/types/task.types';

export const getAll = async () => {
	return getTasksQuery();
};

export const createNewTask = async ({ title }: Pick<Task, 'title'>) => {
	return createNewTaskQuery({ uuid: uuidv4(), title });
};

export const editTask = async ({ uuid, is_completed }: Pick<Task, 'uuid' | 'is_completed'>) => {
	return editTaskQuery({ uuid, is_completed });
};

export const deleteTask = async (uuid: string) => {
	return deleteTaskQuery(uuid);
};

export const TaskServices = {
	getAll,
	createNewTask,
	editTask,
	deleteTask,
};
