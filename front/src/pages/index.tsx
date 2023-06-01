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
        <Container className="flex items-center justify-center min-h-screen">
          <div className="flex items-center gap-2">
            {" "}
            <Typography>Bonjour</Typography>
            <Image
              src="/firebase-1.svg"
              width={300}
              height={300}
              className="w-12 h-auto"
              alt=""
            />
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default Home;
