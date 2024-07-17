'use server';

import { revalidatePath } from 'next/cache';

import { connectToMySQLPool } from '@/lib/connection.mysql';
import { Task } from '@/types/task.types';

export const createTableTasksQuery = async (): Promise<void> => {
	const db = await connectToMySQLPool.getConnection();
	const q = `
		CREATE TABLE Tasks (
			uuid CHAR(36) NOT NULL,
			title VARCHAR(255) NOT NULL,
			is_completed BOOLEAN NOT NULL DEFAULT false,
			created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP NULL DEFAULT NULL,
			deleted_at TIMESTAMP NULL DEFAULT NULL,
			PRIMARY KEY (uuid)
		);
	`;
	await db.query(q);
	db.release();
};

export const getTasksQuery = async (): Promise<Task[]> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'SELECT * FROM Tasks ORDER BY created_at DESC';
	const [rows] = await db.query(q);
	revalidatePath('/');
	db.release();
	return rows as Task[];
};

export const createNewTaskQuery = async (task: Pick<Task, 'uuid' | 'title'>): Promise<void> => {
	const db = await connectToMySQLPool.getConnection();
	const q = 'INSERT INTO Tasks (uuid, title) VALUES (?, ?)';
	await db.query(q, [task.uuid, task.title]);

	db.release();
	revalidatePath('/');
};
