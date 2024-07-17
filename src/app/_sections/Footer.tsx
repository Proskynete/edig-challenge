export default function Footer() {
	const date = new Date();

	return (
		<footer>
			<div className="flex justify-end items-center h-14 shadow-md p-5">
				<p className="text-sm font-normal">
					{date.getFullYear()} Edig frontend challenge. Developed by
					<a href="https://eduardoalvarez.dev" target="_blank" rel="noopener noreferrer" className="font-bold ml-1">
						Eduardo Álvarez
					</a>
				</p>
			</div>
		</footer>
	);
}
