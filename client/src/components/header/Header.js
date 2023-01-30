import React from "react";

function Header() {
    return (
        <div>
            <nav className="absolute inset-x-0 top-0 border bg-blue-100 opacity-80 shadow-xl">
                <ul className="grid grid-cols-4 gap-4">
                    <li className="flex items-center justify-center"><button className=" h-10">Home</button></li>
                    <li className="flex items-center justify-center"><button className=" h-10">Sobre</button></li>
                    <li className="flex items-center justify-center "><button className=" h-10">Serviços</button></li>
                    <li className="flex items-center justify-center"><button className=" h-10">Contato</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
