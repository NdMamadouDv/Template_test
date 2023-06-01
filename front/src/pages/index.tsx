import Image from "next/image";
import { Inter } from "next/font/google";
import Typography from "@/Components/ui/Typography";
import { Container } from "@/Components/layout/Container";

import { AiOutlineArrowRight } from "react-icons/ai";
import Layout from "@/Components/layout/Layout";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Layout>
        <section className="bg-orange-500/80 ">
          <Container className="  min-h-screen">
            <div className=" h-full grid items-center justify-center py-40">
              <Typography className="h1">
                Créons ensemble un site qui vende.
              </Typography>
              <Typography className="font-sm">
                Coder est difficile, et
              </Typography>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
};
export default Home;
