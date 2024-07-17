import '../assets/globals.css';

import type { Metadata } from 'next';

import { Nunito } from '@/assets/fonts';

export const metadata: Metadata = {
	title: 'Edig | TodoApp Challenge',
};

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}
export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es">
			<body className={`${Nunito.className} antialiased h-screen w-screen bg-slate-800 text-white`}>{children}</body>
		</html>
	);
}
