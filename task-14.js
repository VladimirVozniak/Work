// Найти максимальный/минимальный элемент в массиве

let mass = [1, 2, 3, -7, 2, -10, 15, 1, -2, 40, 3]

qwe = (arr) => {
    let minmax = [0, 0]
    arr.forEach(value => {
        if (minmax[1] < value)
            minmax [1] = value
        else if (minmax[0] > value)
            minmax [0] = value
    }, [])
    return minmax
}

console.log(qwe(mass))
