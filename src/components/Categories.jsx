import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import React from "react";

function Categories() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>
          <FaHome />
          <h4>HOME</h4>
        </NavLink>
        <NavLink to={"/cuisine/italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/american"}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/chinese"}>
          <GiChopsticks />
          <h4>CHINESE</h4>
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;
