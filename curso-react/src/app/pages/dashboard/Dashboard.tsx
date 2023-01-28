import { useCallback, useState } from "react"





export const Dashboard = () => {
    const [lista, setLista] = useState<string[]> (['fvdfgdfsgds'])

    const handleInput: React.KeyboardEventHandler<HTMLInputElement> =
      useCallback((e) => {
        if (e.key === 'Enter') {
            if(e.currentTarget.value.trim().length === 0)return; 

            const value = e.currentTarget.value;
            e.currentTarget.value = ('') // limpa o consolee começa sem nada a input 
            setLista((novaLista) => { 
                return [...novaLista,value];
            })
        }
      }, []);

    return(
        <div>
            <p>Lista</p>
            <input
            onKeyDown={handleInput}
            />
            <ul>
             {lista.map((value, index, array)=>{
                return(
                    <li>{value}</li>
                )
             } )}
            </ul>
        </div>
    )
}

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