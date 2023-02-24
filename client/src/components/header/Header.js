import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 min-w-full bg-cyan-900 font-bold text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 p-5 sm:grid-cols-3">
        <div className="flex items-center justify-start">
          <h1 className="text-2xl md:text-3xl">Indie Voyager</h1>
        </div>
        <div className="col-span-2 hidden grid-rows-2 sm:block">
          <div className="grid grid-cols-2 border-b">
            <div className="h-10">
              <ul className="flex min-h-full items-center justify-between">
                <li>
                  <i className="fab fa-instagram"></i>
                </li>

                <li>
                  <i className="fab fa-twitter"></i>
                </li>

                <li>
                  <i className="fab fa-tiktok"></i>
                </li>

                <li>
                  <i className="fab fa-youtube"></i>
                </li>
              </ul>
            </div>
            <div className="flex min-h-full items-center justify-end">
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div>
            <ul className="flex min-h-full items-center justify-between">
              <li>
                <button className="h-10">Notícias</button>
              </li>

              <li>
                <button className="h-10">Games</button>
              </li>

              <li>
                <button className="h-10">Dicas</button>
              </li>

              <li>
                <button className="h-10">Vídeos</button>
              </li>

              <li>
                <button className="h-10">Opiniões</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end">
          <div className="sm:hidden mx-3">
            <button className="text-white" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="sm:hidden">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Header;
