function resolveAfter2Sec(x){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 1000);
  })
}

async function add1(x){
  var a = resolveAfter2Sec(20);
  var b = resolveAfter2Sec(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);
})


// app.js
const timeout = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

async function timer () {
  console.log('timer started')
  await Promise.resolve(timeout(100));
  console.log('timer finished')
}

timer()