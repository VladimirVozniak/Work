// 22. Дана строка. Показать номера символов, совпадающих с
// последним символом строки.

let str = 'test education part'

let mass = str.split('')
let lastSymbol = mass[mass.length - 1]

qwe = (mass) => {
    return mass.reduce((arr, elem, index) => {
        if (elem === lastSymbol)
            arr.push(index)
        return arr
    }, [])
}

console.log(qwe(mass));
