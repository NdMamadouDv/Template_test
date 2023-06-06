import { Container } from "@/Components/Container";
import Typography from "@/Components/ui/Typography";
import Lottie from "lottie-react";
import animation from "@/data/Hamster.json";
import { BsArrowRight } from "react-icons/bs";

import React from "react";
import Link from "next/link";

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

						<Link
							href={"./editor/template"}
							className="flex gap-8 items-center">
							<Typography
								variant="h3"
								component="h3"
								className="text-white">
								Utilisez notre éditeur
							</Typography>
							<BsArrowRight className="text-3xl text-white" />
						</Link>
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
