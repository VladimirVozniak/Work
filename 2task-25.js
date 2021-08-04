// 25. Дан текст. Найти сумму имеющихся в нем цифр.

let str = 'test455test786'

qwe = (str) => {
    let mass = str.split('')
    let sumNumber = 0
    mass.forEach(elem => {
        if (Number(elem))
            sumNumber += Number(elem)
    })
    return sumNumber
}

console.log(qwe(str));
