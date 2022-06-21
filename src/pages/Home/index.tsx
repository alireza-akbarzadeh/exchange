import React from "react";
import { Main, Navbar } from "components";
import styled from "styled-components";
export const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
};



const Container = styled.div``