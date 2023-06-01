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

                <Link href="/editor" className="">
                  {" "}
                  <Typography variant="body-base" className="mt-8">
                    Essayer maintenant
                  </Typography>{" "}
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <section className="my-8">
          <Container className="grid xl:grid-cols-3 items-center justify-center">
            <div className="">
              <Image
                src="/equipe-sur-un-projet.jpg"
                height={300}
                width={300}
                alt=""
              />
              <Typography className="" variant="body-sm" weight="font-normal">
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
            <div className="">
              <Image src="" height={300} width={300} />
              <Typography className=""></Typography>
            </div>
            <div className="">
              <Image src="" height={300} width={300} />
              <Typography className=""></Typography>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};
export default Home;
