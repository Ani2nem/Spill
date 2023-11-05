import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        title="TECHNOLOGIES">
        <p className="subtitle">Harnessing Cutting-Edge Tools for Superior Performance</p>
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Testimonials />
      <SectionTitle title="Get Your Prediction">
        Enter the CSV file that you want analyzed below
      </SectionTitle>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;