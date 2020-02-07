import React from "react";
import styled from "styled-components";

const AppContent = styled.main`
  padding: 20px;
`;

const Content = ({ children }) => {
  return <AppContent>{children}</AppContent>;
};

export default Content;
