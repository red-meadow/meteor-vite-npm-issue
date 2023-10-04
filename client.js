import { printRandom } from 'some-npm-package'

console.log('Random from client.js:')
printRandom()
console.log()

setTimeout(() => {
  import('./clientChild')
}, 1000)