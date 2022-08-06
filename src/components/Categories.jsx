import { FaPizzaSlice, FaHamburger, FaHome } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import React from "react";

function Categories() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>
          <FaHome className="categories" />
          <h4>HOME</h4>
        </NavLink>
        <NavLink to={"/cuisine/italian"}>
          <FaPizzaSlice className="categories" />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/american"}>
          <FaHamburger className="categories" />
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/thai"}>
          <GiNoodles className="categories" />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/chinese"}>
          <GiChopsticks className="categories" />
          <h4>CHINESE</h4>
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;
