import Image from 'next/image';

function Header() {
	return (
		<header className="w-full bg-slate-900 p-4 shadow flex justify-center items-center gap-5">
			<Image src="/edig-logo.png" alt="Logo" width={100} height={100} />
			<h1>TODO App Challenge</h1>
		</header>
	);
}

export default Header;
