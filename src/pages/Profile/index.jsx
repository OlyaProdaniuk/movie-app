import React from "react";
import Form from "../../components/Form/index";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const Profile = () => (
  <div>
    <Link to={ROUTES.HOME}>
      <HomeIcon
        htmlColor="white"
        sx={{ marginLeft: "20px", marginTop: "10px" }}
      />
    </Link>
    <Form />
  </div>
);
export default Profile;
