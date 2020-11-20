let x = -1
let duplicate = true
let random = []
let index = []
const data = 'ABCDE'
for (let i = 0; i < 3; i++) {
  do {
    x = Math.floor(Math.random() * data.length)
    duplicate = index.filter(el => el === x)
    console.log(duplicate.length > 0)
  } while (duplicate.length > 0)
  index.push(x)
  random.push(data[x])
}
console.log(random)
