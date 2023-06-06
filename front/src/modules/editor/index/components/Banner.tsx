import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import Lottie from "lottie-react";
import animation from "@/data/Hamster.json";

import React from "react";

const Banner = () => {
	return (
		<section className="bg-red-500/80">
			<Container className="py-36 flex flex-col">
				<Typography
					variant="display"
					weight="medium"
					className="text-white mb-16 text-center">
					Projetez-vous
				</Typography>

				<div className="flex flex-col md:flex-row justify-between">
					<div className="order-2 md:order-1">
						<Typography
							variant="h2"
							component="h2"
							className="text-white">
							Créez votre site en un clic !
						</Typography>
						<Typography
							variant="h3"
							component="h3"
							className="text-white">
							Utilisez notre éditeur
						</Typography>
					</div>
					<Lottie
						animationData={animation}
						loop={true}
						className="w-64 order-1 md:order-2 self-center"
					/>
				</div>
			</Container>
		</section>
	);
};

export default Banner;
