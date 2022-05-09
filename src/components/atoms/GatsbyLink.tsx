//! This component is created because there were problems with gatsby package types

import React, { FC } from "react";
import { Link } from "gatsby";

const GatsbyLink: FC<Props> = ({ to, className, children }) => (
  <>
    {/* @ts-ignore */}
    <Link to={to} className={className}>
      {/* @ts-ignore */}
      {children}
    </Link>
  </>
);

interface Props {
  to: string;
  className?: string;
}

export default GatsbyLink;
