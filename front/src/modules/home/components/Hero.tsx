import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<section className="bg-orange-500/80 ">
			<Container className="  min-h-screen">
				<div className=" h-full grid items-center justify-center py-36">
					<div className="space-y-10 lg:space-y-12">
						<Typography
							variant="display"
							component="h1"
							weight="medium"
							className="text-white">
							Créons ensemble un site web qui vend.
						</Typography>
						<Typography
							variant="lead"
							className="lg:max-w-xl">
							{
								"Coder est difficile, et vous n'avez pas de temps. Ca tombe bien, nos équipes de développeur dévoués ont mis en place des technologies pour créer les sites internet de demain."
							}
						</Typography>

						<Link href="/editor">
							{" "}
							<Typography
								variant="body-base"
								className="mt-8 ">
								Essayer maintenant
							</Typography>{" "}
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
