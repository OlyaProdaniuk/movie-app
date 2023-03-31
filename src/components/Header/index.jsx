import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Header() {
  return (
    <header>
      <HeaderUser>
        <Link to={ROUTES.PROFILE}>
          <Person2SharpIcon htmlColor="white" sx={{ marginRight: "30px" }} />
        </Link>

        <Link to={ROUTES.SETTINGS}>
          <SettingsOutlinedIcon htmlColor="white" />
        </Link>
      </HeaderUser>
    </header>
  );
}

export default Header;

const HeaderUser = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;
`;
