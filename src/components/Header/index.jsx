import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Header() {
  return (
    <header className="black">
      <HeaderUser>
        <Link to={ROUTES.PROFILE}>
          <HeaderIconUser />
        </Link>

        <Link to={ROUTES.SETTINGS}>
          <HeaderIconSettings />
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
  background: transperent;
  transition: all ease 0.5s;
  :hover {
    color: red;
  }
`;
const HeaderIconUser = styled(Person2SharpIcon)`
  margin-right: 30px;
  color: white;
  :hover {
    color: red;
  }
`;
const HeaderIconSettings = styled(SettingsOutlinedIcon)`
  color: white;
  :hover {
    color: red;
  }
`;
