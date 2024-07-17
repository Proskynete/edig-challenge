'use server';

import { revalidatePath } from 'next/cache';

import { connectToMySQLPool } from '@/lib/connection.mysql';
import { Task } from '@/types/task.types';

export const getTasksQuery = async (): Promise<Task[]> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'SELECT * FROM Tasks';
	const [rows] = await db.query(q);
	revalidatePath('/');
	db.release();
	return rows as Task[];
};
