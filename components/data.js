import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

 import benefitOneImg from "../public/img/techImg.gif";

const benefitOne = {
  image: benefitOneImg,
  bullets: [
    {
      title: <h1 className="text-3xl">Python</h1>,
      desc: "Allowed us to leverage a variety of libraries such as pandas, sklearn, and geopandas, to construct and map our model.",
      icon: <ChartBarSquareIcon/>,
    },
    {
      title: <h2 className="text-3xl">React</h2>,
      desc: "It was utilized in the development of various front-end components across multiple sections of our website.",
      icon: <FaceSmileIcon />,
    },
    {
      title: <h2 className="text-3xl">Tailwind CSS</h2>,
      desc: "Facilitated the implementation of comprehensive styling solutions across our website's design framework.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: <h2 className="text-3xl">Flask</h2>,
      desc: "Ehanced speed, responsiveness, and front-end to back-end integration.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};


export {benefitOne};
