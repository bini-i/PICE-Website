import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

interface MenuItem {
  name: string;
  subMenu?: { name: string, url: string}[];
  url: string;
}

export const Menus: MenuItem[] = [
  {
    name: "Home",
    url: "/",
    // subMenu: [
    //   {
    //     name: "Design",
    //   },
    //   {
    //     name: "Management",
    //   },
    //   {
    //     name: "Navigation",
    //   },
    //   {
    //     name: "CMS",
    //   },
    // ],
  },
  {
    name: "Latest",
    url: "/latest",
  },
  {
    name: "Admission",
    url: "/admission"
  },
  {
    name: "Academics",
    url: "/academics",

    subMenu: [
      {
        name: "Automotive",
        url: "/capacity-building/trainings/automotive"
      },
      {
        name: "Computer Science",
        url: "/capacity-building/trainings/computer"
      },
      {
        name: "Construction Technology",
        url: "/capacity-building/trainings/construction"
      },
      {
        name: "Electrical Electronics",
        url: "/capacity-building/trainings/electronics"
      },
      {
        name: "Garment",
        url: "/capacity-building/trainings/garment"
      },
      {
        name: "Leather Technology",
        url: "/capacity-building/trainings/leather"
      },
      {
        name: "Manufacturing Technology",
        url: "/capacity-building/trainings/manufacturing"
      },
      {
        name: "Welding Technology",
        url: "/capacity-building/trainings/welding"
      },
      {
        name: "Wood Works",
        url: "/capacity-building/trainings/wood"
      },
    ],
  },
  {
    name: "Innovation",
    url: "/innovation"
  },
  {
    name: "Offices",
    url: "/offices"
  },
  {
    name: "About",
    url: "/about"
  },
];