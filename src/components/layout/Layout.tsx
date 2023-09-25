import React, { Children, PropsWithChildren, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="site">{children}</div>
        <Footer />
        <div id="portal"></div>
      </QueryClientProvider>
    </>
  );
};
