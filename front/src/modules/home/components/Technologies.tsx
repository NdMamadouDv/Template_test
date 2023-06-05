import { Container } from "@/Components/layout/Container";
import Typography from "@/Components/ui/Typography";
import Image from "next/image";

const Technologies = () => {
  return (
    <section className="my-8 ">
      {" "}
      <Typography variant="h2">Notre technologie</Typography>
      <Container className="grid xl:grid-cols-2 items-center justify-center gap-10 border-t">
        <div className="xl:flex flex-col gap-6 items-center justify-center space-y-6">
          <Image
            src="/reunion-equipe.jpg"
            height={550}
            width={550}
            alt=""
            className="rounded-tr-[5rem]
        rounded-bl-[5rem]"
          />
          <Typography
            className="text-gray-500/90"
            variant="body-sm"
            weight="regular"
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            cupiditate eos, iste obcaecati amet ut laudantium nostrum aliquam,
            asperiores reprehenderit non at autem provident itaque, quisquam
            consectetur qui temporibus repellendus corrupti quos beatae tempore
            suscipit? Fuga, unde autem. Cupiditate dolor maxime animi temporibus
            sint cumque quod nesciunt inventore explicabo neque.
          </Typography>
        </div>
        <div className="xl:flex flex-col gap-4 items-center justify-center border-t py-8">
          <Image src="/femme_tableau.jpg" height={300} width={300} alt="" />
          <Typography
            className="text-gray-500/90"
            variant="body-sm"
            weight="regular"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            perspiciatis, quo veniam distinctio sit iure possimus mollitia
            voluptatibus numquam aspernatur aperiam delectus saepe? Omnis itaque
            nulla, unde sed quas quibusdam, et nobis consequuntur consectetur
            non iste error natus, maiores asperiores aspernatur repudiandae
            voluptatum. Repellendus, obcaecati.
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
