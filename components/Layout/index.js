import React from "react";
import Header from "../Header";
import Content from "./content";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content children={children} />
      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          color: #4b4b4b;
        }
      `}</style>
    </>
  );
};

export default Layout;
