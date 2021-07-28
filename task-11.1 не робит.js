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

// qwe = (arr, value1, value2) => {
//     return arr.length === arr.filter((elem =>
//         elem.name === value1 ||
//         elem.hometown === value2)).length
// }

qwe = (arr, value1, value2) => {
    arr.forEach(elem => {
        if (elem === value1 ||
            elem === value2)
            return true
    })
    return false
}

console.log(qwe(obj, 'Вова', 'Шахты'))
