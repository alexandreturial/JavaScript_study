function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo){
//   setTimeout(() =>{
//     console.log(msg);
//   }, tempo);
// }

//promisse
function esperaAi(msg, tempo){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(msg);
    }, tempo);
  });
}

esperaAi('fase 1', rand(1, 3))
.then(resp =>{
  console.log(resp)
  return esperaAi('fase 2', rand(1, 3));
}).then(resp =>{
  console.log(resp)
  return esperaAi('fase 3', rand(1, 3));
})
.catch();

esperaAi('fase 2', rand(1, 3));
esperaAi('fase 3', rand(1, 3));
esperaAi('fase 4', rand(1, 3));