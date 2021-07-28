// В функцию передаем коллекцию и название ключа.
// По результату выполнения вывести массив значений по
// этому ключу всех объектов.

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
    age: 33,
    hometown: 'Шахты'
}]

qwe = (arr, key) => {
    return arr.filter(elem => elem.age === key)
}

console.log(qwe(obj, 21))
