import Footer from '@/app/_sections/Footer';
import Header from '@/app/_sections/Header';

import CreateNewTask from './_sections/CreateNewTask';
import TaskList from './_sections/TaskList';

export default function Home() {
	return (
		<main className="w-full h-full grid grid-rows-[auto,1fr,auto] overflow-x-hidden">
			<Header />
			<section className="w-full h-full  overflow-y-auto">
				<div className="w-full max-w-[640px] gap-8 flex flex-col items-center mx-auto pt-10 px-6">
					<CreateNewTask />
					<TaskList />
				</div>
			</section>
			<Footer />
		</main>
	);
}
