import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaBlog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaServicestack,
} from "react-icons/fa";

export const SideBarContent = [
  { name: "Home", route: "/", icon: <FaHome /> },
  { name: "About", route: "/about", icon: <FaInfoCircle /> },
  { name: "Services", route: "/services", icon: <FaServicestack /> },
  { name: "Contact", route: "/contact", icon: <FaPhone /> },
  { name: "Blog", route: "/blog", icon: <FaBlog /> },
  { name: "FAQ", route: "/faq", icon: <FaQuestionCircle /> },
  { name: "Logout", route: "/logout", icon: <FaSignOutAlt /> },
];
