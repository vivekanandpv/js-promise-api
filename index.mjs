function foo() {
  //  usually, promise is rejected with an error object
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
  return Promise.reject(new Error('Oops!'));
}

//  we get a promise here
const promise = foo();

//  provide then, catch, and finally callbacks to this promise
//  they will be invoked asynchronously

promise
  .then((result) => console.log('then', result))
  .catch((error) => console.log('catch', error.message))
  .finally(() => console.log('finally'));

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  catch Oops!
//  finally
