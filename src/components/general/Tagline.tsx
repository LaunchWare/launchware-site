import React, { FC } from "react";

import "./css/tagline.css";

interface PropTypes {
  tagline: string;
}

export const Tagline: FC<PropTypes> = ({ tagline }) => <div className="tagline">{tagline}</div>;
