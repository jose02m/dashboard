// Sidebar imports

import {
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdPeopleOutline,
  MdSupervisedUserCircle,
  MdOutlineLogout,
} from "react-icons/md";

export const SidebarItems = [
  {
    Link: '/',
    section: 'dashboard',
    icon: MdOutlineDashboard,
    heading: "Dashboard",
  },
  {
    Link: '/orders',
    section: 'orders',
    icon: MdOutlineShoppingCart,
    heading: "Orders",
  },
  {
    Link: '/customers',
    section: 'customers',
    icon: MdPeopleOutline,
    heading: "Customers",
  },
  {
    Link: '/employees',
    section: 'employees',
    icon: MdSupervisedUserCircle,
    heading: "Employees",
  },
  {
    Link: '/logout',
    section: 'logout',
    icon: MdOutlineLogout,
    heading: "Salir",
  },
];
