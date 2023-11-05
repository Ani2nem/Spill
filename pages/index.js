import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        id="technologies-section"
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
    </>
  );
}

export default Home;