
import Image from "next/image";
import React, { useState } from "react";

interface ApiFullStackProps {
  imageUrl: string;
  nome: string;
}

interface ApiResponse {
  message: string;
  data: ApiFullStackProps[];
}

// Define a URL da API
const API_URL = `https://api-back-kappa.vercel.app`;

// Define o componente ImagemAleatoria
const ImagemAleatoria = () => {
  // Declara os estados para a URL da imagem e o nome do item
  const [imageUrl, setImageUrl] = useState("");
  const [itemName, setItemName] = useState("");

  // Função assíncrona para buscar os dados da API
  const fetchData = async (data: string) => {
    try {
      // Faz a requisição à API
      const response = await fetch(`${API_URL}/${data}`);
      const result: ApiResponse = await response.json();

      // Verifica se há dados retornados pela API
      if (result.data && result.data.length > 0) {
        // Obtém o primeiro item do array de dados
        const todos = Math.floor(Math.random() * result.data.length)
        const item = result.data[todos];
        // Atualiza os estados da URL da imagem e do nome do item
        setImageUrl(item.imageUrl);
        setItemName(item.nome);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Função para renderizar os botões
  const botao = (data: string) => {
    return (
      <button
        className="bg-green-500 px-1 py-1 rounded-md"
        onClick={() => {
          fetchData(data);
        }}
      >
        {data}
      </button>
    );
  };

  // Renderiza o componente
  return (
    <div className="flex flex-col gap-2 border border-red-900 p-4 w-116 h-96 overflow-hidden" >
      <div className="bottom-3 gap-3">
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
      <div className=" bg-stone-300 w-196 h-80 items-center flex flex-col ">
        {imageUrl && (
          <>
            <p className=" text-neutral-950">{itemName}</p>
            <img src={imageUrl} className=" w-196 h-72"  />
          </>
        )}
      </div>
    </div>
  );
};


export default ImagemAleatoria;