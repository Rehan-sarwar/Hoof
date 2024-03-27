import Image from "next/image";
import { Inter } from "next/font/google";
import Navbav from "@/Components/Home/Navbav";
import Hero from "@/Components/Home/Hero";
import Horse from "@/Components/Home/Horse";
import Expert from "@/Components/Home/Expert";
import Button from "@/Components/Home/Button";
import Review from "@/Components/Home/Review";
import Hoof from "@/Components/Home/Hoof";
import Now from "@/Components/Home/Now";
import Turst from "@/Components/Home/Turst";
import Footer from "@/Components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Navbav />
    <Hero />
    <Horse />
    <Expert />
    <Button />
    <Review />
    <Hoof />
    <Now />
    <Turst />
    <Footer />
   </div>
  );
}
