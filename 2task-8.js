// 8. Несколько массивов. Вывести элементы из первого массива,
// поданного в функцию, которые имеются во всех других массивах,
// поданных в функцию

let mass = [[3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 6], [6, 3, 2, 8, 1],[3, 6, 1, 8, 3, 6, 3, 6, 3, 6]]
sorter = (a, b) => {
    return a - b
}

qwe = (arr) => {
    //сортировка и удаление дубликатов в каждом массиве
    for (let j = 0; j < arr.length; j++) {
        arr[j].sort(sorter)
        for (let i = arr[j].length - 1; i > 0; i--) {
            if (arr[j][i] === arr[j][i + 1]) {
                arr[j].splice(i, 1)
            }
        }
    }

    //объединение массивов и сортировка
    let mass = arr.reduce((newMass, elem) => {
        newMass = newMass.concat(elem)
        return newMass
    })
    mass.sort(sorter)

    //нахождение одинаковых элементов по количеству входных массивов
    let result = []
    let count = 1
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] === mass[i+1]) {
            count++
        } else
            count = 1
        if (count === arr.length) {
            result.push(mass[i])
            count = 1
        }
    }
    return result
}

console.log(qwe(mass))
