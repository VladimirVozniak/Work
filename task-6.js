// В функцию передаем коллекцию и значение.
// По результату выполнения вывести все объекты
// массива, конкретное свойство ('name', 'age' и тд),
// которых равно второму параметру

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

qwe = (arr, val) => {
    count = 0
    return arr.reduce((mass, elem, index) => {
        if (elem.age < val ||
            arr[index].name === val ||
            arr[index].hometown === val) {
            mass[count] = Object.values(elem)
            count++
        }
        return mass
    }, [])
}

console.log(qwe(obj, 25))
