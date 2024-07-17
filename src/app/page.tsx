'use client';

import { useState } from 'react';

import Footer from '@/app/_sections/Footer';
import Header from '@/app/_sections/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Home() {
	const [task, setTask] = useState<string>();
	const [error, setError] = useState<string>();

	const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = () => {
		console.log('Task added: ', task);
	};

	return (
		<main className="w-full h-full grid grid-rows-[auto,1fr,auto]">
			<Header />

			<section className="w-full h-full flex flex-col items-center pt-20">
				<div className="w-full flex items-end justify-center gap-2">
					<Input
						label="¿Qué vas a hacer hoy?"
						id="new-task"
						placeholder="Hoy voy a..."
						value={task}
						onChange={handleChangeTask}
					/>
					<Button onClick={handleAddTask} disabled={!!task} className="mb-[2px]">
						Agregar
					</Button>
				</div>
			</section>

			<Footer />
		</main>
	);
}
