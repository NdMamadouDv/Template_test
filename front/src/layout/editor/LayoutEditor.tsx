import Navigation from "../Components/navigation/editor/Navigation";

interface Props {
	children: React.ReactNode;
}

export default function LayoutEditor({ children }: Props) {
	return (
		<div className="relative min-h-screen w-full">
			<Navigation />
			{children}
		</div>
	);
}
