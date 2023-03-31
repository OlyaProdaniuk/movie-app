import React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
}
// simple MUI alert instead

function CustomizedSnackbars() {
  const alertRef = React.forwardRef(Alert());
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Link to={ROUTES.HOME}>
        <HomeIcon
          htmlColor="white"
          sx={{ marginLeft: "20px", marginTop: "10px" }}
        />
      </Link>
      <Alert severity="error">Page not found!</Alert>
    </Stack>
  );
}

export default CustomizedSnackbars;
