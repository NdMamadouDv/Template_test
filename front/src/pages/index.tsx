import Image from "next/image";
import { Inter } from "next/font/google";
import Typography from "@/Components/ui/Typography";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <h1 className="text-red-500">Bienvenue sur le test de template</h1>
      <h2 className="">TEEEEEEEEEEEEEEEEEEEEEFSDQEQSDTTT</h2>
      <Typography
        variant="lead"
        className="text-3xl text-red-500 "
        font="emphasize"
      >
        Bonjour
      </Typography>
    </div>
  );
}
