import React from "react";
import SingleMovie from "../../components/MovieCard/index";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const MovieInfo = () => (
  <div>
    <Link to={ROUTES.HOME}>
      <HomeIcon
        htmlColor="white"
        sx={{ marginLeft: "20px", marginTop: "10px" }}
      />
    </Link>
    <SingleMovie />
  </div>
);
export default MovieInfo;
