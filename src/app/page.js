import Hero from "./components/Hero/Hero";
import Highlights from "./components/HighlightsCourse/highlights";
import InformationsHero from "./components/InformationsHero/InformaçõesHero";
import Navbar from "./components/Navbar/Navbar";
import MoreInformations from "./components/moreInformations/MoreInformations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InformationsHero />
      <Highlights />
      <MoreInformations />
    </>
  );
}
