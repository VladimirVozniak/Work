// В функцию передаем массив и значение. 
// По результату выполнения вывести все 
// элементы массива, которые больше второго параметра.

let arr = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

moreThen = (arr, val) => {
    morethen=[]
    arr.forEach(element => {
        if (element > val) {
            morethen.push(element)
        }
    });
    return morethen
}

console.log(moreThen(arr, 10))
