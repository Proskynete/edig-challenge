interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	appearance?: 'primary' | 'danger';
	variant?: 'solid' | 'outline';
	size?: 'sm' | 'md';
}

export default function Button({
	children,
	className,
	appearance = 'primary',
	variant = 'solid',
	size = 'md',
	...rest
}: ButtonProps) {
	const _appearance =
		appearance === 'primary'
			? variant === 'solid'
				? 'text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-700'
				: 'text-slate-900 bg-transparent border-slate-900 hover:bg-slate-800 active:bg-slate-700 hover:text-white'
			: variant === 'solid'
				? 'text-white bg-red-900 hover:bg-red-800 active:bg-red-700'
				: 'text-red-900 bg-transparent border-red-900 hover:bg-red-800 active:bg-red-700 hover:text-white';

	const _disabled = variant === 'solid' ? 'disabled:bg-gray-300' : 'disabled:bg-transparent';
	const _size = size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2';

	return (
		<button
			className={`${_size} h-fit border ${_appearance} rounded-md focus:outline-none focus:none ${_disabled} disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-default transition-colors duration-200 ease-in-out ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
