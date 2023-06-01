import Image from "next/image";
import { Inter } from "next/font/google";
import Typography from "@/Components/ui/Typography";
import { Container } from "@/Components/layout/Container";

import { AiOutlineArrowRight } from "react-icons/ai";
import Layout from "@/Components/layout/Layout";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Layout>
        <section className="bg-orange-500/80 ">
          <Container className="  min-h-screen">
            <div className=" h-full grid items-center justify-center py-36">
              <div className="space-y-6">
                <Typography
                  variant="display"
                  component="h1"
                  className="text-white leading-12"
                >
                  Créons ensemble un site web qui vend.
                </Typography>
                <Typography variant="lead" className="text-gray-500/60">
                  Coder est difficile, et vous n'avez pas de temps. Ca tombe
                  bien, nos équipes de développeur dévoués ont mis en place des
                  technologies pour créer les sites internet de demain.
                </Typography>

                <Link href="/editor">
                  {" "}
                  <Typography variant="body-base">
                    Essayer maintenant
                  </Typography>{" "}
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8">
          <Container className="grid xl:grid-cols-3 items-center justify-center gap-10 ">
            <Typography variant="h2">Notre savoir faire</Typography>
            <div className="flex gap-4 items-center justify-center">
              <Image
                src="/equipe-sur-un-projet.jpg"
                height={300}
                width={300}
                alt=""
              />
              <Typography
                className="text-gray-500/90"
                variant="body-sm"
                weight="regular"
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                cupiditate eos, iste obcaecati amet ut laudantium nostrum
                aliquam, asperiores reprehenderit non at autem provident itaque,
                quisquam consectetur qui temporibus repellendus corrupti quos
                beatae tempore suscipit? Fuga, unde autem. Cupiditate dolor
                maxime animi temporibus sint cumque quod nesciunt inventore
                explicabo neque.
              </Typography>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Image src="/femme_tableau.jpg" height={300} width={300} alt="" />
              <Typography
                className="text-gray-500/90"
                variant="body-sm"
                weight="regular"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate perspiciatis, quo veniam distinctio sit iure possimus
                mollitia voluptatibus numquam aspernatur aperiam delectus saepe?
                Omnis itaque nulla, unde sed quas quibusdam, et nobis
                consequuntur consectetur non iste error natus, maiores
                asperiores aspernatur repudiandae voluptatum. Repellendus,
                obcaecati.
              </Typography>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Image
                src="/sitemap-design.jpg"
                height={300}
                width={300}
                alt=""
              />
              <Typography
                className="text-gray-500/90"
                variant="body-sm"
                weight="regular"
              >
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                est. Quibusdam nulla culpa pariatur nobis vitae hic sit
                necessitatibus, provident perspiciatis? Quis amet eius saepe
                deserunt quidem vel beatae sunt nostrum, qui excepturi officia
                incidunt delectus autem aspernatur tempore odit? Beatae, rem
                totam! Nostrum!
              </Typography>
            </div>
          </Container>
        </section>

        <section className="my-8 ">
          <Container className="grid xl:grid-cols-3 items-center justify-center gap-10 border-t">
            <Typography variant="h2">Notre technologie</Typography>
            <div className="flex gap-4 items-center justify-center">
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
                cupiditate eos, iste obcaecati amet ut laudantium nostrum
                aliquam, asperiores reprehenderit non at autem provident itaque,
                quisquam consectetur qui temporibus repellendus corrupti quos
                beatae tempore suscipit? Fuga, unde autem. Cupiditate dolor
                maxime animi temporibus sint cumque quod nesciunt inventore
                explicabo neque.
              </Typography>
            </div>
            <div className="flex gap-4 items-center justify-center border-t py-8">
              <Image src="/femme_tableau.jpg" height={300} width={300} alt="" />
              <Typography
                className="text-gray-500/90"
                variant="body-sm"
                weight="regular"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate perspiciatis, quo veniam distinctio sit iure possimus
                mollitia voluptatibus numquam aspernatur aperiam delectus saepe?
                Omnis itaque nulla, unde sed quas quibusdam, et nobis
                consequuntur consectetur non iste error natus, maiores
                asperiores aspernatur repudiandae voluptatum. Repellendus,
                obcaecati.
              </Typography>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};
export default Home;
