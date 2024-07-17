import '../assets/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Edig | TodoApp Challenge',
};

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}
export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
