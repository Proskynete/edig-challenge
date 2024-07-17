interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			className={`px-4 py-2 h-fit text-white bg-slate-900 rounded-md hover:bg-slate-800 focus:outline-none focus:none active:bg-slate-700 disabled:bg-gray-400 disabled:cursor-default transition-colors duration-200 ease-in-out ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
