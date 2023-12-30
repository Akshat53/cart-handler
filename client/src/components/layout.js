import React from "react";
import Navbar from "./navbar";
const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
