import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import Personnalisation from "./Personnalisation";
import Validation from "./Validation";
import Receive from "./Receive";

const Description = () => {
	return (
		<section>
			<Container className="py-28">
				{/* Title */}
				<Typography
					variant="h2"
					component="h2"
					className="text-center">
					Comment ça marche ?
				</Typography>

				<Personnalisation />
				<Validation />
				<Receive />
			</Container>
		</section>
	);
};

export default Description;
