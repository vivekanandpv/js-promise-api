function foo() {
  return Promise.resolve('Hi there!');
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
//  then Hi there!
//  finally
