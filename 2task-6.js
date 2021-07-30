// 6. В функцию параметром передается массив и значение, больше
// которого нужно вывести значения из массива.

let mass = [[4, 6, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6], 6]

qwe = (arr, value) => {
    let result
    arr.forEach((elem, index) => {
        if (elem > value) {
            result = index
        }
    })
    return result
}

console.log(qwe(mass[0], mass[1]))
