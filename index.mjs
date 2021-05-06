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
      reject(new Error('Oops!'));
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

square(5) //  resolves
  .then((result) => cube(result)) //  rejects
  .then((result) => increment(result)) //  doesn't activate
  .then((result) => console.log('then', result)) //  doesn't activate
  .catch((error) => console.log('catch', error.message)) //  activates because of rejection
  .finally(() => console.log('finally'));

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  -- 2 seconds delay
//  catch Oops!
//  finally
