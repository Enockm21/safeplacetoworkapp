import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
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
      <Head>
        <title>Safeplacetowork est un organisme qui aide les entreprises à créér un espace sûr pour les employés</title>
        <meta
          name="description"
          content="Safeplacetowork est un organisme qui aide les entreprises à créér un espace sûr pour les employés"
        />
        <link rel="icon" href="/img/logo/couleur-embleme.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
       // pretitle="Safeplacetowork"
        title="Pourquoi travailler avec Safeplacetowork ">
        SAFEPLACETOWORK est une entreprise engagée dans la prévention du harcèlement sexuel en milieu professionnel. Notre mission est de créer des lieux de travail où chaque employé se sent en sécurité, respecté et valorisé. Nous croyons fermement que chaque individu a le droit de travailler dans un environnement exempt de harcèlement et de discrimination.
      </SectionTitle>
       <Benefits data={benefitOne} />
    
      {/* <Benefits imgPos="right" data={benefitTwo} /> */} 
      <SectionTitle
       /*  pretitle="Watch a video" */
        title="Demo video quiz interactif video">
       {/*  This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this. */}
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle=""
        title="Ce que les entreprises disent de nous">
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;