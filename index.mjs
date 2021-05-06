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

//  In ES2017, we have async and await constructs, using which,
//  we can write much easier asynchronous code

//  create a function with async keyword

async function computeResult() {
  //  in case promise chain is broken
  //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  try {
    //    these lines are executed in sequential order
    const squareValue = await square(5); //  squareValue is not a promise but value 25
    console.log('square completed', squareValue);
    const cubeValue = await cube(squareValue); //  cubeValue is 15625
    console.log('cube completed', cubeValue);
    const incrementValue = await increment(cubeValue); //  incrementValue is 15626
    console.log('incrementValue completed', incrementValue);
  } catch (error) {
    console.log('Error occurred', error.message);
  } finally {
    console.log('finally');
  }
}

computeResult(); //  this call is still asynchronous

console.log('End of script');

// Output----
// End of script
// square completed 25
// cube completed 15625
// incrementValue completed 15626
// finally
