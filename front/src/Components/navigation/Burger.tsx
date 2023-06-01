interface Props {
	onClick?: () => void;
	isOpen: boolean;
}

const BurgerButton = ({ onClick, isOpen = false }: Props) => {
	return (
		<button
			className="inline-block lg:hidden ml-auto px-2 py-2 rounded-md text-gray-500 focus:ring-white"
			onClick={onClick}>
			<span className="sr-only">Open main menu</span>
			<svg
				className={`h-8 w-8 ${isOpen ? "hidden" : "block"}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M3 12h18M3 6h18M3 18h18" />
			</svg>
			<svg
				className={`h-8 w-8 ${isOpen ? "block" : "hidden"}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		</button>
	);
};

export default BurgerButton;
