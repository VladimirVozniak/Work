// В функцию передаем массив и значение. 
// По результату выполнения вывести все 
// номер элементов массива, которые меньше 
// второго параметра.

let arr = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

lessThen = (arr, val) => {
    lessthen=[]
    arr.forEach((element,index) => {
        if (element < val) {
            lessthen.push(index)
        }
    });
    return lessthen
}

console.log(lessThen(arr, 2))
