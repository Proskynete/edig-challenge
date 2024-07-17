interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export default function Input({ id, label, value, onChange, ...props }: InputProps) {
	return (
		<div className="w-full flex flex-col gap-1">
			{label && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				value={value}
				onChange={onChange}
				className="flex w-full bg-transparent rounded-lg border border-slate-400 h-11 px-4 text-slate-900 placeholder:text-slate-500 transition-[border] duration-200 ease-in-out focus:ring-0 focus:outline-none focus-visible:outline-none focus:border-slate-900"
				{...props}
			/>
		</div>
	);
}
