import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/logo/photo-hero01.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Améliorer le bien être de vos employés",
  //desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Atelier d'échange ",
      desc: "Notre équipe des formateurs qualifié du bien être au travail anime en presentiel des atelier pour échanger sur le harcèlement et agression sexuel ",
      icon: <FaceSmileIcon />,  
    },
    {
      title: "Quiz interactif anonyme ",
      desc: "Nous mettons en place un questionnaire interactif  afin des sensibilisé les employés lors de leur intégration entreprise",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Label Safeplacetowork",
      desc: "En partenanriat avec nous, vous aurez un label safeplacetowork  afin de garder une bonne image de votre entreprise et rejoindre notre partenariat de plus de 200 entreprises",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
