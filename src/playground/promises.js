const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Chris',
      age: 27
    });
    // reject('something went wrong!');
  }, 1500);
});

console.log("before");

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
    }, 1500);
  });
}).then((str) => {
  console.log('Does this run?', str);
}).catch((e) => {
  console.log('e: ', e);
})


console.log('after');