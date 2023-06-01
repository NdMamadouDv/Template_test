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
                  className="text-white"
                >
                  Créons ensemble un site web qui vende.
                </Typography>
                <Typography variant="lead">
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
      </Layout>
    </>
  );
};
export default Home;
