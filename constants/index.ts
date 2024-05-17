import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaVideo,
  FaUser,
} from "react-icons/fa";

export const SidebarLinks = [
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
