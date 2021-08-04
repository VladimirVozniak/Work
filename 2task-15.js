// 15. Дана строка. Разделить строку на фрагменты по три подряд
// идущих символа. В каждом фрагменте средний символ заменить на
// случайный символ, не совпадающий ни с одним из символов этого
// фрагмента. Показать фрагменты, упорядоченные по алфавиту.

let str = 'test education part 2'

qwe = (str) => {
    let mass = str.split('')
    let j = 0
    for (let i = 0; i < mass.length; i++) {
        mass.splice(i, 3, mass[j] + '_' + mass[j + 2])
        j++
    }
    mass.sort()
    console.log(mass)
}

console.log(qwe(str))
