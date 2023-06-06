import Link from "next/link";
import { FaTheRedYeti } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

interface navButtonEditor {
	name: string;
	icone: string | { icon: React.ElementType };
}

const Navigation = () => {
	return (
		<nav className="bg-red-500 top-1/2 -translate-x-1/2 left-[4rem] fixed">
			{/* Button nav */}
			<button>
				<AiOutlineArrowRight />
			</button>
			<button>
				<IoMdSettings />
			</button>

			{/* Top nav */}
			<Link href={"/"}>
				<FaTheRedYeti className="text-[4rem]" />
			</Link>

			{/* Mid Nav */}

			{/* Bottom nav */}
		</nav>
	);
};

export default Navigation;
