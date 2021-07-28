// В функцию передаем коллекцию. По результату выполнения
// вывести объект, определенное свойство которого, максимальное

let obj = [{
    name: 'Вова',
    age: 22,
    hometown: 'Шахты'
}, {
    name: 'Илья',
    age: 21,
    hometown: 'Шахты'
}, {
    name: 'Саша',
    age: 33,
    hometown: 'Шахты'
}, {
    name: 'Аня',
    age: 41,
    hometown: 'Шахты'
}]

qwe = (arr) => {
    let max = 0
    let maxIndex = 0
    for (let elem in arr) {
        if (max < arr[elem].age) {
            max = arr[elem].age
            maxIndex = elem
        }
    }
    return arr[maxIndex]
}

console.log(qwe(obj))
