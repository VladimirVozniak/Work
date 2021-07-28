// Напишите функцию moveElement(arr,from,to), которая
// позволяет поменять местами элементы из позиции from в позицию to.

let mass = [1, 2, 3, -7, 2, -10, 15, 1, -2, 40, 3]

moveElement = (arr, from, to) => {
    const temp = arr[from]
    arr[from] = arr[to]
    arr[to] = temp
    return arr
}

console.log(moveElement(mass, 0, 5))
