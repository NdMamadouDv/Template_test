interface Props {
	children: React.ReactNode;
	navFixed?: boolean;
}

export default function Layout({ children, navFixed = false }: Props) {
	return (
		<div className="flex flex-col min-h-screen">
			{/* {navFixed ? <Navigation fixed /> : <Navigation />} */}
			<nav className="bg-slate-400 py-4">Navigation</nav>
			<main className="flex-grow">{children}</main>
			<footer className="bg-slate-400 py-4">Footer</footer>
			{/* <Footer /> */}
		</div>
	);
}
