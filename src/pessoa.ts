export class Pessoa {
    public nome: string;
    public idade: number;
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);

    }
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}