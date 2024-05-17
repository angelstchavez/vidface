import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaVideo,
  FaUser,
} from "react-icons/fa";

export const sidebarLinks = [
  {
    label: "Inicio",
    Icon: FaHome,
    route: "/",
  },
  {
    label: "Próxima reunión",
    Icon: FaCalendarAlt,
    route: "/upcoming",
  },
  {
    label: "Anterior",
    Icon: FaHistory,
    route: "/previous",
  },
  {
    label: "Grabaciones",
    Icon: FaVideo,
    route: "/recordings",
  },
  {
    label: "Sala personal",
    Icon: FaUser,
    route: "/personal-room",
  },
];

export const avatarImages = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];