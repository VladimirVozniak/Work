// 26. Даны две строки. Определите, содержится ли меньшая
// по длине строка в большей.

let str = 'text education part 2'

qwe = (str, val) => {
    let mass = str.split(' ')
    for(elem of mass) {
        if (elem === val)
            return true
    }
    return false
}

console.log(qwe(str, 'past'));
