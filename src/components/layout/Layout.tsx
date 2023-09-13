import React, { Children, PropsWithChildren, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { WindowLocation } from "@reach/router";

export const Layout = ({
  location,
  title,
  children,
}: {
  location: WindowLocation<unknown>;
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Navbar />
      <div className="site">{children}</div>
      <Footer />
    </>
  );
};
