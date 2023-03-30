import React, { Children, PropsWithChildren, ReactNode } from "react"

export const Layout = ({
  location,
  title,
  children
}:
{
  location: string,
  title: string,
  children: ReactNode
}) => {
  return (<div className="site">
    <h1>LaunchWare</h1>
    {children}
  </div>)
}
