import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaBlog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaServicestack,
  FaUsers,
} from "react-icons/fa";
import { FaEarthAsia, FaPerson } from "react-icons/fa6";

export const SideBarContent = [
  { name: "Home", route: "/dashboard", icon: FaHome }, // Icon passed as a component, not a string
  { name: "Status", route: "/dashboard/status", icon: FaInfoCircle },
  { name: "Customers", route: "/dashboard/customers", icon: FaUsers },
  { name: "Services", route: "/services", icon: FaServicestack },
  { name: "Contact", route: "/contact", icon: FaPhone },
  { name: "Blog", route: "/blog", icon: FaBlog },
  { name: "FAQ", route: "/faq", icon: FaQuestionCircle },
  { name: "Add Customer", route: "/dashboard/customerAdd", icon: FaPerson },
  { name: "Visit Website", route: "/", icon: FaEarthAsia },
  { name: "Logout", route: "/", icon: FaSignOutAlt },
];
