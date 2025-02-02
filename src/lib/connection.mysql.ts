import mysql from 'mysql2/promise';

export const connectToMySQLPool = mysql.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'edig_task_manager',
	waitForConnections: true,
});
