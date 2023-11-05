import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

 import benefitOneImg from "../public/img/techImg.gif";
 import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  image: benefitOneImg,
  bullets: [
    {
      title: <h1 className="text-3xl">React</h1>,
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: <h2 className="text-3xl">Tailwind CSS</h2>,
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: <h2 className="text-3xl">Python</h2>,
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: <h2 className="text-3xl">Node</h2>,
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: <h2 className="text-3xl">Yooooo</h2>,
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne};
