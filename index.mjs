function foo() {
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#constructor
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi there!');
    }, 2000);
  });
}

//  we get a promise here
const promise = foo();

//  provide then, catch, and finally callbacks to this promise
//  they will be invoked asynchronously

promise
  .then((result) => console.log('then', result))
  .catch((error) => console.log('catch', error))
  .finally(() => console.log('finally'));

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  -- 2 seconds delay
//  then Hi there!
//  finally
