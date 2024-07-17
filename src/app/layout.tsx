import '@/assets/globals.css';

import type { Metadata } from 'next';

import { Nunito } from '@/assets/fonts';
import { ReactQueryProvider } from '@/lib/react-query';

export const metadata: Metadata = {
	title: 'Edig | TodoApp Challenge',
};

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}
export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="es">
			<body className={`${Nunito.className} antialiased h-screen w-screen bg-slate-200 text-slate-900 box-border`}>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
