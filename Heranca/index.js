//produtos -> aumento e desconto
//camiseta => cor, caneca => material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material,estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque',{
        enumrable: true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const camiseta = new Camiseta('regata', 7.65, 'verde');
const caneca = new Caneca('xicara', 13, 'procelana', 35);
caneca.estoque = 100;

console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);

