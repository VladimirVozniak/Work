// 17. Дана строка. Сделайте заглавным первый символ этой строки

let str = '!&^%$% text education part 2'

qwe = (str) => {
    let mass = str.split('')

    for (i = 0; i < mass.length; i++) {
        if (mass[i].toUpperCase() !== mass[i]) {
            let buffer = mass[i].toUpperCase()
            mass[i] = buffer
            break
        }
    }
    return mass.join('')
}

console.log(qwe(str));
