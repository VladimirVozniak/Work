// 4. Напишите функцию findCouple(array, number), которая ищет в
// массиве все пары целых чисел, сумма которых равна заданному значению.

let mass = [[4, 6, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6], 10]

findCouple = (array, number) => {
    let newMass = []
    array.forEach((elem, index) => {
        array.forEach((elem1, index1) => {
            if (elem + elem1 === number && index !== index1)
                newMass.push([elem, elem1])
        })
    })
    return newMass
}

console.log(findCouple(mass[0], mass[1]))
