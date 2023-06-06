import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import { Button } from "@/Components/ui/button";
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-slate-400/80 py-16">
      <Container className="py-8">
        <div className="grid max-w-[80%] mx-auto gap-y-10 items-center justify-">
          <Typography
            variant="h1"
            component="h1"
            className="text-left text-white font-extrabold"
            font="main"
          >
            {" "}
            Bienvenue dans l'usine
            <Typography
              variant="h1"
              component="span"
              className="text-white  font-extrabold "
              font="main"
            >
              .
            </Typography>
          </Typography>

          <Typography
            variant="body-sm"
            component="p"
            className="text-white italic"
          >
            Il y en a pour tous les goûts. Et toutes ces sections sont uniques !
            Bonne visite
          </Typography>

          <Link href="#section1" className="mx-auto">
            <Button
              size="small"
              variant="customize"
              className="bg-blue-500 hover:bg-blue-500 text-white "
              rounded="full"
            >
              {" "}
              Commencer la visite
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
