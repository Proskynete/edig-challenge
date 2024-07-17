import Image from 'next/image';

export default function Header() {
	return (
		<header className="w-full bg-slate-900 text-white p-4 shadow flex justify-center items-center gap-5">
			<Image src="/edig-logo.png" alt="Logo" width={100} height={47} />
			<h1>TODO App Challenge</h1>
		</header>
	);
}
