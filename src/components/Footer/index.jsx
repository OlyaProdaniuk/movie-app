import CopyrightIcon from "@mui/icons-material/Copyright";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <CopyrightIcon />
      2023 Lorem Ipsum, LCC. All rights reserved.
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  text-align: center;
  color: grey;
`;
