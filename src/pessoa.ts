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

const pessoa1 = new Pessoa("Ana", 20);
const pessoa2 = new Pessoa("Bruno", 25);
const pessoa3 = new Pessoa("Carla", 30);

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();