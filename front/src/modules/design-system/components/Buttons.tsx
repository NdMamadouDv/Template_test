import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import CardButtons from "@/Components/cards/CardButtons";

const Buttons = () => {
	return (
		<section>
			<Container className="flex flex-col gap-6 lg:gap-8 my-24 lg:my-32">
				{/* TITLE */}
				<Typography
					variant="h2"
					weight="medium"
					className="text-center m-12">
					Buttons
				</Typography>
				{/* PRIMARIES */}
				<CardButtons color="primary" />
				{/* SECONDARIES */}
				<CardButtons color="secondary" />
			</Container>
		</section>
	);
};

export default Buttons;
