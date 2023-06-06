import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <Container className="my-8">
      <div className=" grid lg:grid-col-3 items-center justify-center">
        <div className="border rounded-lg ">
          <Typography variant="h2">Design</Typography>
          <Typography component="h3" variant="h3" className="">
            01 Design
          </Typography>
          <Typography component="p" variant="p" className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            repudiandae.
          </Typography>
          <Typography component="h3" variant="h3" className="">
            02 UI/UX
          </Typography>
          <Typography component="p" variant="p" className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            aperiam.
          </Typography>
        </div>
        <Typography>Frontend</Typography>
        <Typography>Backend</Typography>
      </div>
    </Container>
  );
};

export default Section1;
