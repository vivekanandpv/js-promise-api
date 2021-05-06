//  JavaScript event-loop schedules the asynchronous code

Promise.resolve('Hi there!').then((data) =>
  console.log('Promise result', data)
);

console.log('End of script');

//  because promise is asynchronous, we see:
//  End of script
//  Promise result Hi there!
