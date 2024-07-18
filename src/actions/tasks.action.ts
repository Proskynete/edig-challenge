'use server';

import { revalidatePath } from 'next/cache';

import { connectToMySQLPool } from '@/lib/connection.mysql';
import { Task } from '@/types/task.types';

export const getTasksQuery = async (): Promise<Task[]> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'SELECT * FROM Tasks WHERE is_hidden = FALSE ORDER BY created_at DESC';
	const [rows] = await db.query(q);
	db.release();
	revalidatePath('/');
	return rows as Task[];
};

export const createNewTaskQuery = async (task: Pick<Task, 'uuid' | 'title'>): Promise<void> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'INSERT INTO Tasks (uuid, title) VALUES (?, ?)';
	await db.query(q, [task.uuid, task.title]);
	db.release();
	revalidatePath('/');
};

export const editTaskQuery = async (task: Pick<Task, 'uuid' | 'is_completed'>): Promise<void> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'UPDATE Tasks SET is_completed = ?, updated_at = CURRENT_TIMESTAMP WHERE uuid = ?';
	await db.query(q, [task.is_completed, task.uuid]);
	db.release();
	revalidatePath('/');
};

export const deleteTaskQuery = async (uuid: string): Promise<void> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'UPDATE Tasks SET is_hidden = TRUE, deleted_at = CURRENT_TIMESTAMP WHERE uuid = ?';
	await db.query(q, [uuid]);
	db.release();
	revalidatePath('/');
};
