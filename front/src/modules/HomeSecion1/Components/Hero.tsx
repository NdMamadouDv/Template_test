import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <Container className="py-8">
        <div className="grid max-w-[80%] mx-auto">
          <Typography variant="h1">
            {" "}
            Vous vous trouvez dans les bas fonds de l'usine. C'est ici que la
            magie opère !
          </Typography>
          <Typography variant="body-base" component="p">
            Il y en a pour tous les goûts, toutes ces sections sont uniques !
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
