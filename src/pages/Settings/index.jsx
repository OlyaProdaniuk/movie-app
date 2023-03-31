import React from "react";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

import HomeIcon from "@mui/icons-material/Home";

const action = (
  <Button color="secondary" size="small">
    edit
  </Button>
);

// rename components with nums

const Settings = () => (
  <div>
    <Link to={ROUTES.HOME}>
      <HomeIcon
        htmlColor="white"
        sx={{ marginLeft: "20px", marginTop: "10px" }}
      />
    </Link>
    <Titleh1>Settings</Titleh1>
    <Account>
      <Titleh3>Account</Titleh3>
      <Stack spacing={2}>
        <SnackbarContent
          message="Email address: user@gmail.com"
          action={action}
        />
        <SnackbarContent message={"Password: *******"} action={action} />
        <SnackbarContent message="Name: Name Surname" action={action} />
      </Stack>

      <Stack spacing={2} sx={{ marginTop: "40px" }}>
        <Titleh3>Subscription</Titleh3>
        <SnackbarContent message="Billed Through: Lorem Ipsum Inc." />
        <SnackbarContent message={"Current Plan: Monthly"} action={action} />
        <SnackbarContent message="Price: $8/month" />
      </Stack>
    </Account>
  </div>
);
export default Settings;

const Account = styled.div`
  align-self: center;
  background-color: rgba(221, 221, 221, 0.06);
  border-radius: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 18px;
  max-width: 792px;
  padding-top: 36px;
  padding-bottom: 36px;
  width: 100%;
`;

const Titleh1 = styled.h1`
  text-align: center; ;
`;

const Titleh3 = styled.h3`
  margin-left: 30px;
`;
