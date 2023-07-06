import React, { useState } from "react";

interface Restaurant {
  cidade: string;
  createdAt: string;
  imageUrl: string;
  nome: string;
}

interface ApiResponse {
  message: string;
  data: Restaurant[];
}

const API_URL = `https://api-back-kappa.vercel.app`;

const ImagemAleatoria = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [itemName, setItemName] = useState("");

  const fetchData = async (data: string) => {
    try {
      const response = await fetch(`${API_URL}/${data}`);
      const result: ApiResponse = await response.json();

      if (result.data && result.data.length > 0) {
        const item = result.data[0];
        setImageUrl(item.imageUrl);
        setItemName(item.nome);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const botao = (data: string) => {
    return (
      <button
        className="bg-green-500 px-1 py-1 rounded-md"
        onClick={() => {
          fetchData(data);
        }}>
        {data}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-2 border border-red-900 p-4 w-700 h-400 ">
      <div className="bottom-3 gap-3 ">
        {botao("restaurante")}
        {botao("gato")}
        {botao("livro")}
        {botao("cachorro")}
        {botao("carro")}
        {botao("moto")}
        {botao("turismo")}
        {botao("hotel")}
        {botao("filme")}
        {botao("celular")}
      </div>
      <div>
        {imageUrl && (
          <>
            <p className=" m-4 ml-9"  >    {itemName}</p>
            <img
              src={imageUrl}
              height={300}
              width={600}
              alt="Imagem"
              className="bg-red-700"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImagemAleatoria;
