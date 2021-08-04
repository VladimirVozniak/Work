// 28. Перевернуть значения массива

let mass = [6, 2, 9, 1, 7, 4, 7]

qwe = (arr) => {
    let arr2 = []
    let i = arr.length - 1
    arr.forEach(elem => {
        arr2[i] = elem
        i--
    })
    return arr2
}

console.log(qwe(mass));
