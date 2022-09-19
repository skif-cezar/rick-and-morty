import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <h1>Главная</h1>
      </NavLink>
    </div>
  );
};
