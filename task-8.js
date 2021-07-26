// В функцию передаем коллекцию и 2 значения.
// По результату выполнения вывести все объекты массива,
// у которых одно свойство ('name' )равно первому параметру
// или другое свойство ('age') равно второму параметру.

let obj = [{
    name: 'Вова',
    age: 22,
    hometown: 'Шахты'
}, {
    name: 'Илья',
    age: 21,
    hometown: 'Ростов'
}, {
    name: 'Саша',
    age: 30,
    hometown: 'Шахты'
}, {
    name: 'Аня',
    age: 33,
    hometown: 'Шахты'
}]

qwe = (arr, val1, val2) => {
    count = 0
    return arr.reduce((mass, elem, index) => {
        if (elem.age < val2 ||
            elem.name === val1) {
            mass[count] = Object.values(elem)
            count++
        }
        return mass
    }, [])
}

console.log(qwe(obj, 'Шахты', 31))
