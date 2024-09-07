import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaBlog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaServicestack,
  FaUsers,
  FaUserPlus,
} from "react-icons/fa"; // Import more icons for distinct routes
import { FaEarthAsia, FaPerson, FaSitemap } from "react-icons/fa6";

export const SideBarContent = [
  { name: "Home", route: "/", icon: <FaHome /> },
  { name: "About", route: "/about", icon: <FaInfoCircle /> },
  { name: "Customers", route: "/dashboard/customers", icon: <FaUsers /> }, // Updated icon for customers
  { name: "Services", route: "/services", icon: <FaServicestack /> },
  { name: "Contact", route: "/contact", icon: <FaPhone /> },
  { name: "Blog", route: "/blog", icon: <FaBlog /> },
  { name: "FAQ", route: "/faq", icon: <FaQuestionCircle /> },
  { name: "Add Customer", route: "/dashboard/customerAdd", icon: <FaPerson /> }, // Updated icon for adding customers
  { name: "Visit Website", route: "/", icon: <FaEarthAsia /> },
  { name: "Logout", route: "/", icon: <FaSignOutAlt /> },
];
