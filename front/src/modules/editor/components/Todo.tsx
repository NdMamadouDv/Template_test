import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import React from "react";

const Todo = () => {
	return (
		<section>
			<Container className="py-32">
				<Typography variant="h2">TODO LIST</Typography>
				<ul>
					<li>
						{"Conceptualiser l'architecture à partir de la page d'édition"}
					</li>
					<li>
						{"(./editor - ./editor/module - ./editor/commande - ...etc...)"}
					</li>
					<li>
						{
							"Penser cette page comme un descriptif attractif et animé du module d'édition. Un pré-tutoriel"
						}
					</li>
				</ul>
			</Container>
		</section>
	);
};

export default Todo;
