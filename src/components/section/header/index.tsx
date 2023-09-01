import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Nav from "../../reusable/nav";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="header-button z-[20] fixed right-0 m-5 w-[80px] h-[80px] bg-[#455CE9] cursor-pointer rounded-full flex items-center justify-center"
      >
        <div
          className={`header-burger w-full  ${
            isActive
              ? "after:top-[-1px] after:rotate-45 before:top-[1px] before:-rotate-45"
              : ""
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Header;
