import React from "react";

function Footer() {
    return (
        <div>
            <footer className="absolute inset-x-0 bottom-0 bg-blue-100 opacity-80 shadow-xl">
                <h3>Nossos Canais</h3>
                <ul className="grid grid-cols-4 gap-4">
                    <li className="flex items-center justify-center"><button className=" h-10">Instagram</button></li>
                    <li className="flex items-center justify-center"><button className=" h-10">Youtube</button></li>
                    <li className="flex  items-center justify-center "><button className=" h-10">Twitter</button></li>
                </ul>
                <p>Copyright © 2023 Indie Voyager. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Footer;
