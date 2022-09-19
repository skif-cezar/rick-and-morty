import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Menu.module.scss";

const MENU_STYLES = clsx(styles.menu);
const MENU_LIST_STYLES = clsx(styles.menu__list);
const MENU_ITEM_STYLES = clsx(styles.menu__item);
const MENU_LINK_STYLES = clsx(styles.menu__link);

export const Menu = () => {
  return (
    <nav className={MENU_STYLES}>
      <ul className={MENU_LIST_STYLES}>
        <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to={"/"}>Home</NavLink>
        </li>
		  <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to={"/"}>Home</NavLink>
        </li>
		  <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to={"/"}>Home</NavLink>
        </li>
		  <li className={MENU_ITEM_STYLES}>
          <NavLink className={MENU_LINK_STYLES} to={"/"}>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};
