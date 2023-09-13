import React, { Children, PropsWithChildren, ReactNode } from "react";
import Navbar from "./layout/Navbar";
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
    </>
  );
};
