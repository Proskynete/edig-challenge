export default function TasksPlaceholder() {
	return (
		<>
			<div className="w-32 h-6 bg-gray-300 animate-pulse rounded-md" />
			{[...Array(4)].map((_, index) => (
				<div key={index} className="w-full min-h-24 bg-gray-300 flex p-4 rounded-lg animate-pulse" />
			))}
		</>
	);
}
