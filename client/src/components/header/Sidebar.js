import React, { useEffect } from "react";

const Sidebar = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > 639) {
        toggleMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, toggleMenu]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-cyan-900 text-white py-4 px-2 opacity-90 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <ul className="text-lg font-bold">
        <li className="my-4 cursor-pointer">Notícias</li>
        <li className="my-4 cursor-pointer">Games</li>
        <li className="my-4 cursor-pointer">Dicas</li>
        <li className="my-4 cursor-pointer">Vídeos</li>
        <li className="my-4 cursor-pointer">Opiniões</li>
      </ul>
    </div>
  );
};

export default Sidebar;
