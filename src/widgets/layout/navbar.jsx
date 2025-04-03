import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" mt-2 flex flex-col gap-2 text-inherit md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 ">
      {[
        { href: "#", label: "Home" },
        { href: "#aboutUs", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contactUs", label: "Contact" },
      ].map(({ href, label }) => (
        <Typography
          key={label}
          as="li"
          variant="small"
          color="blue-gray"
          onClick={() => setOpenNav(!openNav)}
          className="capitalize  font-medium text-base rounded-md hover:text-green-600 dark:hover:text-white"
        >
          <a
            href={href}
            className="flex items-center gap-1 font-medium text-base"
          >
            {label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <MTNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1 font-medium text-2xl"
          >
            Divyang Radadiya
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}   className="overflow-hidden md:hidden">
          {navList}

        </Collapse>
      </MTNavbar>


    </>
  );
}

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
