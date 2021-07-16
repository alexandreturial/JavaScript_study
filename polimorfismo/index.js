//Classe pai
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;  
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('Saldo insuficiente: ');
        this.verSaldo();
        return
    } 
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/C: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`);
};

//---------- CONTA CORRENTE-----------//
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log('Saldo insuficiente: ');
        this.verSaldo();
        return
    } 
    this.saldo -= valor;
    this.verSaldo();
};


//--------------CONTA POUPANÇA-----------//
function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


//-----------INSTANCIA DAS CLASSES-----------//
const conta1 = new Conta(11, 22, 10);
const cc = new CC(55, 72, 50, 100);

cc.depositar(10);
cc.sacar(80);

console.log("------------------------------------------------");
const cp = new CP(55, 72, 50);

cp.depositar(10);
cp.sacar(80);
