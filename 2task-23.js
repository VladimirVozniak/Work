// 23. Удалить из массива значения, индексы которых указаны
// во втором массиве

let arr = [[5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1, 3]]

qwe = (mass1, mass2) => {
    for (let i = mass1.length; i >= 0; i--) {
        mass2.forEach(elem => {
            if (mass1[i] === elem)
                mass1.splice(i, 1)
        })
    }
    return mass1
}
console.log(qwe(arr[0], arr[1]));
