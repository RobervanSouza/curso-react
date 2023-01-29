import { useCallback, useEffect, useState } from "react";
import { ApiExceptions } from "../../shared/services/api/ApiExceptions";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";



export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll().then((result) => { // o the
      if (result instanceof ApiExceptions){
        alert(result.message);
      } else {
        setLista(result);
      }
    })
   
  }, []);

  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;
        e.currentTarget.value = ""; // limpa o consolee começa sem nada a input
        setLista((novaLista) => {
          if (novaLista.some((listItem) => listItem.title === value))
            return novaLista;
          return [
            ...novaLista,
            {
              id:novaLista.length,
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    },
    []
  );

  return (
    <div>
      <p>Lista</p>
      <p>
        {" "}
        Conta quantos itens estão selecionados:{" "}
        {lista.filter((listItem) => listItem.isCompleted).length}{" "}
      </p>
      <input onKeyDown={handleInput} />
      <ul>
        {lista.map((listItem, index, array) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => {
                  setLista((listaVelha) => {
                    return listaVelha.map((novaListaItem) => {
                      const listaSelecionada =
                        novaListaItem.title === listItem.title
                          ? !novaListaItem.isCompleted
                          : novaListaItem.isCompleted;
                      return {
                        ...novaListaItem,
                        isCompleted: listaSelecionada,
                      };
                    });
                  });
                }}
              />

              {listItem.title}
            </li> // esse kei e so pra eliminar um erro do console
          );
        })}
      </ul>
    </div>
  );
};

//3 o li e quem coloca os pontos
// {lista.map((value, index, array)=> )} //4 quando coloca o {} e pra entender que e javaScript, da pra usar varias funções. o MAP passa na lista cada vez que executar. O VALUE passa um item diferente, O INDEX indica a posição do item na lista, o ARRAY entrega o valor na lista

// if(e.currentTarget.value.trim().length === 0)return;  //3 o e curent.target pega um valor que o usuario digita na input for ==0  essa input #### <input onKeyDown={handleInput}/>### e executa, se ele não digitar nada então retorna nada,
//  if(e.currentTarget.value.trim().length === 0)return; //4 essa verificação para testar se o usuario vai teclar espaço na input e tecle ENTER #### <input onKeyDown={handleInput}/>### então o TRIM e para fazer com que o usuario tecle espaço e de enter ia mandar algo vazio. O TRIM remove os espaços
// ######################
// 3 essa e outra forma de adicionar itens na lista
//        lista.push(e.currentTarget.value);//6 aqui adiciona todos os valores que são enviados.
//      setLista([...lista]);// 6 o [... = spred] ele pega os valores que foram adicionados e junta com os que ja tem na

//     setLista((novaLista) => {
// 6 AQUI PEGA O VALOR ATUAL DO INPUT QUE FOI DIGITADO
//     e.currentTarget.value = ""; // com essa função ele não altera o valor que foi digitado, como e UMA CONST seu valor não e alterado
//    return [...novaLista, value]; // 8 quando o evento for acionado ele adiciona um novo item na lista [... = spred]o
//   });

//  setLista((novaLista) => {
//    if (novaLista.some((listItem) => listItem.title === value)) return novaLista;
//3 esse if e para verificar se esta vindo algun=(some) item com o titulo igual, returna um bolean, retorna a lista antiga, porque não adicionar um novo item com o nome igual
//    return [
//      ...novaLista,
//      {
//        title: value,
//        isSelected: false,
//      },
//    ];
//  });
//   <input type="checkbox" />; ///6 essa inpot e para selecionar os itens, começa com false return [...novaLista,{
//  title: value, // 6 aqui mostra o titulo
//  isSelected: false, //3 aqui a checkbox começa vazio so altera quando e clicada na input
//

// <p> {lista.filter((listItem) => listItem.isSelected).length}  // 6   essa função e para contar quantos itens stão selecionados

/*
 checked={listItem.isSelected} //1 checa a quantidade de itens selecionados
                        onChange={() => { //2 page um evento que foi alterado no input
                          setLista(listaVelha => { //3 pega a lista existente
                          return listaVelha.map(novaListaItem => { //4 pega a lista existente e retorna uma nova lista atravez do MAP   
                            const listaSelecionada = novaListaItem.title === listItem.title // 5 essa const a para verificar qual são os itens que estão selecionados, atravez do titulo, ver se e igual o item selecionado
                            ? !novaListaItem.isSelected // 6 seo o item selecionado for igual então inverte o valor
                            :novaListaItem.isSelected;// 7 se não for igual, então continua o mesmo
                            return {
                                ...novaListaItem,//8 nesse screp==... pega os itens qua ha tinha e e altera com o isselected
                                isSelected: listaSelecionada // 9 aqui tem o valor atualizado do item
                        */



        // useEffect(() => {
        //   TarefasService.getAll().then((result) => { //6 o tarefa service pega a lista no getall e passa para o THEN, o then executa uma função, que e if e else, se os dados esticer ero então cai no IF  se não cai no ELSE.
        //     // o the
        //     if (result instanceof ApiExceptions) { // 6 o instanceof e para chamar o apiexceptipon 
        //       alert(result.message);
        //     } else {
        //       setLista(result);//3 se der certo manda a lista, esta no db.json
        //     }
        //   });
        // }, []);