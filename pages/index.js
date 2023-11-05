import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>Spill</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title=" TECHNOLOGIES">
        <p className="subtitle">Harnessing Cutting-Edge Tools for Superior Performance</p>
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Testimonials />
        <SectionTitle
            title="Try Spill"></SectionTitle>
      <Cta />
      <Footer />
    </>
  );
}

export default Home;