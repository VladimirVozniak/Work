// В функцию передаем массив и значение.
// По результату выполнения вывести true,
// если в массиве есть значение равное первому параметру.

let mass = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

qwe = (arr, value) => {
    for (let elem of arr) {
        if (elem === value)
            return true
    }
    return false
}

console.log(qwe(mass, 5))
