import React from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Nav = ({ sidebarOpen, setSidebarOpen }: SidebarProps) =>{
    return (
        <div className=" h-svh w-64 pt-14 flex flex-col justify-between bg-custom-blue"
        >
          <ul className="text-blue-500">
            <li>Casa</li>
            <li>Acerca de</li>
            <li>login</li>
            <li>compras</li>
            <li>cuenta</li>
            <li>nueva mision</li>
          </ul>
        </div>
      );
}

export default Nav;