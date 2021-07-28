// В функцию передаем массив. Нужно вернуть массив,
// в котором отсутствуют ложные значения

let mass = [123, false, null, 'test', undefined, -5, 0, 2, -14, -0, NaN, true, ""]

qwe = (arr) => {
    return arr.filter(elem => Boolean(elem) === true)
}

console.log(qwe(mass))
