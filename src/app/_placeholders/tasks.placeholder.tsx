export default function TasksPlaceholder() {
	return (
		<div className="w-full bg-gray-200 flex p-4 rounded-lg justify-between items-center animate-pulse">
			<div className="flex items-center space-x-3">
				<div className="rounded h-5 w-5 bg-gray-300 animate-pulse" />

				<div className="flex flex-col">
					<div className="bg-gray-300 h-5 w-96 rounded-md animate-pulse" />
					<div className="bg-gray-300 h-3 w-48 mt-1 rounded-md animate-pulse" />
				</div>
			</div>
			<div>
				<div className="bg-gray-300 h-8 w-20 rounded-md animate-pulse" />
			</div>
		</div>
	);
}
