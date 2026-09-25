import { Pessoa } from './pessoa';


class teste extends Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        super(nome, idade);
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new teste("Ana", 20);
const pessoa2 = new teste("Bruno", 25);
const pessoa3 = new teste("Carla", 30);