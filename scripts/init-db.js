require('dotenv').config({ path: '../env.local' });
const mysql = require('mysql2/promise');

async function initDatabase() {
	const connection = await mysql.createConnection({
		host: process.env.DB_HOST || 'localhost',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASSWORD || '',
	});

	const DB_NAME = process.env.DB_DATABASE || 'edig_task_manager';
	const [databases] = await connection.query(`SHOW DATABASES LIKE '${DB_NAME}';`);

	if (databases.length === 0) {
		await connection.query(`CREATE DATABASE ${DB_NAME};`);
		console.log(`Database ${DB_NAME} created.`);
		await connection.changeUser({ database: DB_NAME });
		console.log(`Switched to database ${DB_NAME}.`);

		const q = `
			CREATE TABLE Tasks (
				uuid CHAR(36) NOT NULL,
				title VARCHAR(255) NOT NULL,
				is_completed BOOL NOT NULL DEFAULT FALSE,
				is_hidden BOOL NOT NULL DEFAULT FALSE,
				created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
				updated_at TIMESTAMP NULL DEFAULT NULL,
				deleted_at TIMESTAMP NULL DEFAULT NULL,
				PRIMARY KEY (uuid)
			);
		`;
		await connection.query(q);
		console.log('Table Tasks created.');
	} else {
		console.log(`Database ${DB_NAME} already exists.`);
	}

	await connection.end();
}

initDatabase().catch(console.error);
