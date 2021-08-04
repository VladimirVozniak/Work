// 18. Проверьте, что строка заканчивается на .html.

let str = 'http://localhost.html'

qwe = (str) => {
    let mass = str.split('.')

    if (mass[mass.length - 1] === 'html')
        return true
    return false
}

console.log(qwe(str));
