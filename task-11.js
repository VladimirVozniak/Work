// В функцию передаем коллекцию и 2 значения.
// По результату выполнения вывести true, если
// хотя бы у одного одно свойство равно первому
// параметру, а другое свойство равно второму параметру.

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
    age: 30,
    hometown: 'Шахты'
}, {
    name: 'Аня',
    age: 33,
    hometown: 'Шахты'
}]

qwe = (arr, value1, value2) => {
    for (let elem of arr) {
        if (elem.age < value1 ||
            elem.hometown === value2) {
            return true
        } else {
            return false
        }
    }
}

console.log(qwe(obj, 10, 'Ростов'))
