import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/data";
import { NavLink } from "./link";

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div className="nav-menu h-screen bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[10]">
      <div className="nav-body box-border h-full p-[100px] flex flex-col justify-between">
        <div className="nav flex flex-col text-[56px] gap-[12px] mt-[80px]">
          <div className="nav-header text-[rgb(153,153,153)] border-b-[1px] border-solid border-b-[rgb(153,153,153)] uppercase text-[11px] mb-[40px]">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            );
          })}
        </div>
        <div className="nav-footer">
          <a href="">Awwwards</a>
          <a href="">Instagram</a>
          <a href="">Dribble</a>
          <a href="">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
