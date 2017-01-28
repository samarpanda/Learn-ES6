const fetch = require("node-fetch")
const co = require('co')

fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(post => post.title)
  .then(x => console.log('Title: ', x));

co(function *(){
  const url = "http://jsonplaceholder.typicode.com/posts/1"
  const response = yield fetch(url)
  const post = yield response.json()
  const title = post.title
  console.log('CO: ', title)
})

run(function *(){
  const url = "http://jsonplaceholder.typicode.com/posts/1"
  const response = yield fetch(url)
  const post = yield response.json()
  const title = post.title
  console.log('Run: ', title)
})

/**
 * Replicate what co implementation
 */
function run(generator){
  const iterator = generator()
  const iteration = iterator.next()
  const promise = iteration.value
  promise.then( response => {
    const anotherIterator = iterator.next(response)
    const anotherPromise = anotherIterator.value
    anotherPromise.then( y => iterator.next(y))
  })
}