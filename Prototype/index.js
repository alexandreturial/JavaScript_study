// //new Object -> Object.prototype
// const objA = {
//     chavA: 'A'
//     //__proto__: Objetct.prototype
// };


// const objB = {
//     chavB: 'B'
//      //__proto__: objA
// };

// Object.setPrototypeOf(objB, objA);


// //Exemplo com funções Construtoras

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentural){
    this.preco = this.preco - (this.preco * (percentural / 100));
};

Produto.prototype.aumento = function(percentural){
    this.preco = this.preco + (this.preco * (percentural / 100));
};

const p1 = new Produto('camiseta', 50);
//Literal
const p2 = {
   nome:'Caneca',
   preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 42
    }
});

p3.aumento(10);

console.log(p1);
console.log(p2);
console.log(p3);