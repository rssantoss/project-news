import React, { useState } from "react";
import Axios from "axios";

function Admin() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
      }));
    };
      
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
          name: values.name,
          cost: values.cost,
          category: values.category,
        }).then((response) => {
          console.log(response);
        });
      };
  return (
    <div className="p-6">
    <div className="w-80 bg-white shadow-xl rounded-md space-y-4 p-6">
      <div className="">
        <label className="block text-sm text-gray-800  mb-1">Login</label>
        <input type="text" name="user" placeholder="Usuário" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
      </div>
      <div className="">
        <label className="block text-sm text-gray-800  mb-1" >Senha</label>
        <input type="password" name="password" placeholder="Senha" className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out" onChange={handleChangeValues} />
      </div>
      <div className="">
        <button className="w-full text-lg font-bold bg-blue-500 hover:bg-blue-600  rounded text-white shadow p-1" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  </div>
  );
}

export default Admin;
