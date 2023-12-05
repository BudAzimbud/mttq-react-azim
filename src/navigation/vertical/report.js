import { Printer } from "react-feather";

export default [
  {
    header: "Report",
  },
  {
    id: "report",
    title: "Report",
    icon: <Printer size={20} />,
    navLink: "/report",
    children: [
      {
        navLink: "/fuel-transaction-history",
        title: "Fuel Transaction History",
        id: "fuel-transaction-history",
      },
      {
        navLink: "/machine-usage",
        title: "Machine Usage",
        id: "machine-usage",
      },
      {
        navLink: "/manpower-usage",
        title: "Manpower Usage",
        id: "manpower-usage",
      },
    ],
  },
];
