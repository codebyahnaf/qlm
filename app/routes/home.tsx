import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import Mission from "~/components/mission";
import Hero from "~/components/hero";
import About from "~/components/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quality Local Marketing" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <div className="pageBackground">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <div className="bg-circle3"></div>
    <Navbar/>
    <Hero/>
    <About/>
    <Mission/>
    </div>

    </>
  )
}
