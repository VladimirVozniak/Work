// 10. Вывести сообщение равны или 2 объекта

let a = {test: 8, text: 9};
let b = {test: 8, text: 9};

qwe = (a, b) => {
    let lenghtObj = 0
    let count = 0
    for (let elem in a) {
        lenghtObj++
        for (let elem1 in b) {
            if (elem === elem1 &&
                a[elem] === b[elem1]) {
                count++
            }
        }
    }
    if (lenghtObj === count)
        return true
    else
        return false
}

console.log(qwe(a, b))
