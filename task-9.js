// В функцию передаем массив и значение.
// По результату выполнения вывести все элементы
// массива, которые не равны второму параметру.

let mass = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

notEcuals = (arr, val1) => {
    return arr.filter(elem => elem !== val1)
}

console.log(notEcuals(mass, 3))
