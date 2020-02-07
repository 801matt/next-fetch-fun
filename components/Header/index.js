import React from "react";
import Nav from "./nav";
import styled from "styled-components";

const AppHeader = styled.header`
  background: #f7f7f7;
`;

const Header = () => {
  return (
    <div>
      <AppHeader>
        <Nav />
      </AppHeader>
    </div>
  );
};

export default Header;
