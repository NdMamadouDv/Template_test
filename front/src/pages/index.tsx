import Image from "next/image";
import { Inter } from "next/font/google";
import Typography from "@/Components/ui/Typography";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" layout max-w-lg mx-auto min-h-screen">
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
