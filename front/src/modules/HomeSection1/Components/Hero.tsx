import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import { Button } from "@/Components/ui/button";
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-slate-400/80">
      <Container className="py-8">
        <div className="grid max-w-[80%] mx-auto gap-y-10">
          <Typography
            variant="display"
            component="h1"
            className="text-left text-blue-800 font-extrabold"
            font="main"
          >
            {" "}
            Bienvenue dans l'usine
            <Typography
              variant="display"
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

          <Link href="#section1">
            <Button
              size="small"
              className="bg-blue-800 hover:bg-blue-800"
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
