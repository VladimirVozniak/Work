// 29. Создайте функцию, которая параметром принимает объект.
// Функция умножает все числовые свойства объекта на 2.

let obj = {
    name: 'test',
    age: 25,
    weight: 65,
    height: 165
}

qwe = (obj) => {
    for (let elem in obj) {
        if (Number(obj[elem]))
            obj[elem] *= 2
    }
    return obj
}

console.log(qwe(obj))
