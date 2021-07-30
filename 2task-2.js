// 2. Даны две строки. Сравнить строки. Вывести символы большей
// строки, на количество которых отличается.

const str1 = 'text education part 2'
const str2 = 'text education'

differenceText = (str1, str2) => {
    let result
    let compare
    if (str1.split(' ').length > str2.split(' ').length) {
        result = str1.split(' ')
        compare = str2.split(' ')
    } else if (str1.split(' ').length < str2.split(' ').length) {
        result = str2.split(' ')
        compare = str1.split(' ')
    }
    compare.forEach(elem1 => {
        result = result.filter(elem2 => elem2 !== elem1)
    })

    return result
}

console.log(differenceText(str1, str2))
