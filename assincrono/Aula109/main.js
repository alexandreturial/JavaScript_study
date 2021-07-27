function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

//promisse
function esperaAi(msg, tempo){
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string'){
      reject(false)
      return;
    };
    
    setTimeout(() =>{
      resolve(msg);
    }, tempo);
  });
}

/* Tipos e Promise */
//promise.all
//promise.race
//promise.resolve
//promise.reject

const promises = [
  'primeiro valor',
  esperaAi('fase 1', rand(1, 3)),
  esperaAi('fase 2', rand(1, 3)),
  esperaAi(45455, rand(1, 3)),
  'outro valor'
];

Promise.all(promises).then(valor => {
  console.log(valor);
}).catch(err =>{
  console.log(err);
})