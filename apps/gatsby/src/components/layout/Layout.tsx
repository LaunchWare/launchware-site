import React, { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Footer from "./Footer";
import Navbar from "./Navbar";

export function Head() {
  return <></>
}

export function Layout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="site">{children}</div>
        <Footer />
        <div id="portal" />
      </QueryClientProvider>
  );
}
