// 19. Дана строка; нужно написать функцию, которая позволяет
// вернуть значение true, если строка является палиндромом, и 
// false — если нет.

str = 'testset'

qwe = (str) => {
    let a = 0
    let b = str.length - 1

    while (a < b) {
        if (str[a] === str[b]) {
            a++
            b--
        } else
            return false
    }
    return true
}

console.log(qwe(str));
