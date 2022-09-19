import React from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import {Menu} from "../Menu/Menu";

const HEADER_STYLES = clsx(styles.header);

export const Header = () => {
  return (
    <header className={HEADER_STYLES}>
      <Menu />
    </header>
  );
};
