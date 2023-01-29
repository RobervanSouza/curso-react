import { Api } from "../ApiAxios";
import { ApiExceptions } from "../ApiExceptions";

export interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiExceptions> => {
  //
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiExceptions(error.message || "erro ao consultar api");
  } // se não encontar os dados retorna o arro
};

const getById = async (id: number): Promise<ITarefa | ApiExceptions> => {
  //
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiExceptions(error.message || "erro ao consultar id");
  } // se não encontar os dados retorna o arro
};

const create = async (
  dataToCreate: Omit<ITarefa, "id">
): Promise<ITarefa[] | ApiExceptions> => {
  //
  try {
    const { data } = await Api().post("/tarefas", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiExceptions(error.message || "erro ao criar tarefas");
  } // se não encontar os dados retorna o arro
};

const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa[] | ApiExceptions> => {
  //
  try {
    const { data } = await Api().put(`/tarefas/{id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiExceptions(error.message || "erro ao atualizar tarefas");
  } // se não encontar os dados retorna o arro
};

const deleteById = async (id: string): Promise<undefined | ApiExceptions> => {
  //
  try {
     await Api().delete(`/tarefas/{id}`);
    return undefined;
  } catch (error: any) {
    return new ApiExceptions(error.message || "erro ao deletar tarefas");
  } // se não encontar os dados retorna o arro
};

export const TarefasService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};

//const getAll = async (): Promise<ITarefa[retorna a lista de ITarefas] | ApiExceptions> => { //1 retorna uma prom essa de tarefas opu erro(ApiExceptions)

//  const { data } = await Api(/aqui vem os dados da api, o localhost:3000, se não teria que colocar o endereço).get("/tarefas"); // 2 se não der erro então retorna a {data} o objeto. retorna a lista de tarefas.

//   const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa[] | ApiExceptions> => { // 3  a função (dataToCreate: Omit<ITarefa, 'id'>) e somente para que não possa um idcom esse comando (Omit<ITarefa, 'id), então do itarefas so da pra usar   title: string; isCompleted: boolean; e nã recebe o id
