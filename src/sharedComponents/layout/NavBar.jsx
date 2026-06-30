import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "../button";
import navLogo from "../../assets/logo.webp";
import shoppingCart from "../../assets/shopping-cart.svg";

import { useAppSelector } from "../../hooks/useAppSelector";
import { selectTotalQuantity } from "../../feature/checkOut/cartSelectors";

export const NavBar = () => {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  const navItems = [
    {
      title: "Order Pizza",
      path: "/order",
    },
    {
      title: "Build Ur Pizza",
      path: "/build",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b">
      <Container>
        <div className="flex flex-col">
          {/* Top Row */}
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={navLogo}
                alt="Pizzeria"
                className="h-10 w-10 rounded md:h-12 md:w-12"
              />

              <span className="text-2xl font-bold text-white/85">Pizzeria</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `border-b-2 pb-1 transition font-semibold
                    ${
                      isActive
                        ? "border-amber-500 text-white/85"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            {/* Cart */}
            <Link to="/cart">
              <Button className="">
                <img
                  src={shoppingCart}
                  className="sm:w-5 sm:h-5 w-4 h-4"
                  alt=""
                />
                <span className="hidden sm:inline ml-2">Shopping Cart</span>
                {totalQuantity > 0 && (
                  <span className="ml-2 rounded bg-black px-2 py-0.5 text-xs font-bold text-white">
                    {totalQuantity}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex justify-center gap-8 pb-4 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `border-b-2 pb-1 transition
                  ${
                    isActive
                      ? "border-amber-500 text-white"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
