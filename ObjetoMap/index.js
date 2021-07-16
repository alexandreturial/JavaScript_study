const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'alex'},
    {id: 1, nome: 'maria'},
];

// const novasPessoas ={};
// for(const {id, nome} of pessoas){
//     novasPessoas[id] = {id, nome};
// }

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}


console.log(novasPessoas);