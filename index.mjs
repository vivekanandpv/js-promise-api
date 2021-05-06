function square(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}

function cube(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n * n);
    }, 1000);
  });
}

square(5)
  .then((result) => cube(result)) //  cube returns promise
  .then((result) => console.log('then', result)) //  chained; result comes from cube now
  .catch((error) => console.log('catch', error))
  .finally(() => console.log('finally'));

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  -- 2 seconds delay
//  then 15625
//  finally
