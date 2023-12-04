// ** React Imports
import { Link } from "react-router-dom";
import { useState } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import {
  User,

  Settings,
  Power,
  ChevronDown,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";

const UserDropdown = () => {
  // ** State
  const [userData] = useState(null);

  //** ComponentDidMount
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <Avatar img={userAvatar} imgHeight="38" imgWidth="38" status="online" />
        <div className="user-nav d-sm-flex d-none ms-1">
          <span className="user-name fw-bold">
            {(userData && userData["username"]) || "Azim"}
          </span>
        </div>
        <div className=" d-sm-flex d-none ">
          <span className="user-name fw-bold">
           <ChevronDown size={25}/>
          </span>
        </div>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem
          tag="a"
          href="/pages/profile"
          onClick={(e) => e.preventDefault()}
        >
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/pages/account-settings"
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to="/login">
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
