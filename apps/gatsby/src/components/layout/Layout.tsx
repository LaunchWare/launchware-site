import React, { ReactNode } from "react";

import { WindowLocation } from "@reach/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Script } from "gatsby";

import Footer from "./Footer";
import Navbar from "./Navbar";

export function Head() {
  return <></>;
}

export function Layout({
  location,
  title,
  children,
}: {
  location: WindowLocation<unknown>;
  title: string;
  children: ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="site">{children}</div>
      <Footer />
      <div id="portal" />
    </QueryClientProvider>
  );
}
