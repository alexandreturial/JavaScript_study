const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}

const pessoaPrototyope = {... falar, ...comer}

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototyope,
        {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        }
    );
}

const p1 = criaPessoa('Alex', 'silva');

console.log(p1);