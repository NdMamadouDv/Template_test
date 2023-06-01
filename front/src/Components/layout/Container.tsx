import clsx from "clsx";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className = "" }: Props) => {
	return (
		<div className={clsx(className, "container mx-auto px-4 md:px-5 lg:px-6")}>
			{children}
		</div>
	);
};
