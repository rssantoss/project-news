import React from "react";

function Footer() {
  return (
    <footer className="bottom-0 min-w-full bg-cyan-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-4 md:grid-cols-1 lg:min-w-full sm:w-1/2 sm:mx-auto border-b shadow-white py-10">
          <h1 className="flex items-center justify-start text-2xl lg:text-3xl font-bold mx-auto my-6">
            Indie Voyager
          </h1>
          <div className="mx-auto my-6">
            <h3 className="font-bold h-9">INSTITUCIONAL</h3>
            <ul className="">
              <li>
                <button className="">Quem Somos</button>
              </li>
              <li>
                <button className="">Contato</button>
              </li>
              <li>
                <button className="">Política de Privacidade</button>
              </li>
            </ul>
          </div>

          <div className="mx-auto my-6">
            <h3 className="font-bold h-9">NOSSOS CANAIS</h3>
            <ul className="flex flex-col">
              <li>
                <button className="">Indie Voyager</button>
              </li>
              <li>
                <button className="">@indie_voyager</button>
              </li>
              <li>
                <button className="">cortes_indie_voyager</button>
              </li>
            </ul>
          </div>
          <div className="mx-auto my-6">
            <form>
              <h3 className="font-bold h-9">CADASTRE-SE EM NOSSO BOLETIM</h3>
              <div className="flex items-center border-b border-yellow-500 py-2">
                <input
                  className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                  type="text"
                  placeholder="E-mail"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 rounded border-4 border-yellow-500 bg-yellow-500 py-1 px-2 text-sm text-white hover:border-yellow-700 hover:bg-yellow-700"
                  type="button"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="py-10 sm:w-1/2 sm:mx-auto">
          Copyright © 2023 Indie Voyager. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
