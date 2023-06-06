import Navigation from "../Components/navigation/Navigation";

interface Props {
	children: React.ReactNode;
	navFixed?: boolean;
}

export default function LayoutBasic({ children, navFixed = false }: Props) {
	return (
		<div className="flex flex-col min-h-screen">
			{navFixed ? <Navigation fixed /> : <Navigation />}
			<main className="flex-grow">{children}</main>
			<footer className="bg-slate-400 py-4">Footer</footer>
			{/* <Footer /> */}
		</div>
	);
}
