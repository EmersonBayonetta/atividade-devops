import { contador } from './contador';
import { livro } from './livro';
import { Pessoa } from './pessoa';

const pessoas = [
    new Pessoa('Ana', 20),
    new Pessoa('Bruno', 25),
    new Pessoa('Carla', 30),
];

pessoas.forEach((pessoa) => pessoa.apresentar());

const novoContador = new contador();
novoContador.mostrar();
novoContador.incrementar();
novoContador.mostrar();
novoContador.decrementar();
novoContador.mostrar();
novoContador.resetar();
novoContador.mostrar();

const livroExemplo = new livro('Dom Casmurro', 'Machado de Assis');
console.log(`${livroExemplo.titulo} - ${livroExemplo.autor}`);