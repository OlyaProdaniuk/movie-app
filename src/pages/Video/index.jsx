import React from "react";
import Video from "../../components/Video/index";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const Register = () => (
  <div>
    <Link to={ROUTES.HOME}>
      <HomeIcon
        htmlColor="white"
        sx={{ marginLeft: "20px", marginTop: "10px" }}
      />
    </Link>
    <Video />
  </div>
);
export default Register;
