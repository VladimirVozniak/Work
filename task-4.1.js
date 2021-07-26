// В функцию передаем массив и значение.
// По результату выполнения вывести все
// номер элементов массива, которые меньше
// второго параметра.

const arr = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

lessThen = (arr, val) => {
    return arr.reduce((sum, elem, index) => {
        if (elem < val) {
            sum.push(index)
        }
        return sum
    }, [])
}

console.log(lessThen(arr, 5))
