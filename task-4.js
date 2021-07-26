// В функцию передаем массив и значение. 
// По результату выполнения вывести номер 
// последнего элемента массива, который равен 
// второму параметру.

let arr = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

lastElem = (arr, val) => {
    let last
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            last = i
        }
    }
    return last
}

console.log(lastElem(arr, 3))
