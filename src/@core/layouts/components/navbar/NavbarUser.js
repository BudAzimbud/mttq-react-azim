// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Dropdowns Imports
import UserDropdown from "./UserDropdown";

// ** Third Party Components
import { Sun, Moon, Search } from "react-feather";

// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap";
import moment from "moment";

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  const [time, setTime] = useState();

  const setTimeString = () => {
    const timeMoment = moment().format("HH:mm:ss , DD MMMM YYYY");
    setTime(timeMoment);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimeString();
    }, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <Fragment>
      <div
        className="bookmark-wrapper d-flex"
        style={{ width: "15rem" }}
      >
        <div className="wrapper-input-search">
          <input className="input-search" placeholder="Search" />
          <Search size={12} />
        </div>
      </div>
      <ul className="nav navbar-nav align-items-center ms-auto">
        <h6 className="d-none d-lg-inline me-2" >{time}</h6>
        <UserDropdown />
      </ul>
    </Fragment>
  );
};
export default NavbarUser;
