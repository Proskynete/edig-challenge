'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';

export default function CreateNewTask() {
	const [task, setTask] = useState<string>();

	const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = () => {
		console.log('Task added: ', task);
	};

	return (
		<section className="w-full flex items-end justify-center gap-2">
			<Input
				id="new-task"
				label="¿Qué vas a hacer hoy?"
				placeholder="Hoy voy a..."
				value={task}
				onChange={handleChangeTask}
			/>
			<Button onClick={handleAddTask} disabled={!!task} className="mb-[2px]">
				Agregar
			</Button>
		</section>
	);
}
