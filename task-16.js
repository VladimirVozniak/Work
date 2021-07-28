// В функцию подается несколько массивов.
// Вернуть один массив со всеми элементами.

let mass1 = [1, 2, 3, -7, 2, -10, 15, 1, -2, 40, 3]
let mass2 = [3, 4, 415, 25, 5, 25, 25, 2, 4, 234, 5, 25, 6, 0]

mass = (...arrays) => {
    const newArr = []
    arrays.forEach(elem => {
        elem.forEach(elem1 => newArr.push(elem1))
    })
    return newArr
}

console.log(mass(mass1, mass2))
