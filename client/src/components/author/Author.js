import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Author() {
  const [authorInfo, setAuthorInfo] = useState({ username: "", password: "" });
  const history = useNavigate();

  const handleInputChange = (event) => {
    setAuthorInfo({ ...authorInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/api/authenticate", authorInfo)
      .then((response) => {
        console.log(response.data);
        history("/newPage");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-40 bg-slate-700">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-white my-20">Indie Voyager</h1>
        </div>
      </div>
      <div className="flex min-h-screen justify-center bg-blue-500">
        <div className="my-20">
          <div className="h-76 w-80 space-y-6 rounded-md bg-white p-6 shadow-xl">
            <div>
              <label className="mb-1 block text-sm text-gray-800">Login</label>
              <input
                type="username"
                name="username"
                placeholder="Usuário"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-300 transition duration-200 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-800">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-300 transition duration-200 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex space-x-9">
              <div className="flex space-x-1">
                <input type="checkbox" />
                <p className="text-sm text-gray-600">Manter-me Logado</p>
              </div>
              <button className="text-gray-600 hover:underline text-sm">
                Esqueci a senha
              </button>
            </div>
            <div>
              <button
                className="w-full rounded bg-blue-500 p-1 text-lg font-bold text-white shadow hover:bg-blue-600"
                onChange={handleInputChange}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Author;
