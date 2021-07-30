const nome = 'Alexandre';
const sobrenome = 'Silva';
const idade = 22;

function soma(x, y){
  return x +y;
}

export class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export { nome, sobrenome, idade, soma };