import Footer from '@/app/_sections/Footer';
import Header from '@/app/_sections/Header';

import CreateNewTask from './_sections/CreateNewTask';
import TaskList from './_sections/TaskList';

export default function Home() {
	return (
		<main className="w-full h-full grid grid-rows-[auto,1fr,auto] ">
			<Header />
			<section className="w-full max-w-[640px] h-full flex flex-col items-center gap-8 mx-auto pt-10">
				<CreateNewTask />
				<TaskList />
			</section>
			<Footer />
		</main>
	);
}
