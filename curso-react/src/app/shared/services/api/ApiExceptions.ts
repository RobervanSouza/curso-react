

export class ApiExceptions extends Error {
    public readonly message: string =''; // 1 inicia vazio
    constructor(message: string) {
        super(); // 3 constructor da class error

        this.message = message; //4 pasa o error
    }

}