function promissedExample(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hey, sou promise');
      resolve();
    }, 2000);
  });
}

export default async function(){
  await prossmissedExample();
  console.log('terminou')
}