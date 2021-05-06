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

function increment(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 500);
  });
}

square(5)
  .then((result) => cube(result)) //  cube returns promise
  .then((result) => increment(result)) //  increment returns promise
  .then((result) => console.log('then', result)) //  chained; result comes from increment now
  .catch((error) => console.log('catch', error))
  .finally(() => console.log('finally'));

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  -- 2.5 seconds delay
//  then 15626      ((5^2)^3 + 1 = 15626)
//  finally
