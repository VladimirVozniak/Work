// 12. Преобразовать коллекцию в другой вид
//
let colec = [
    {firstName: 'Test', lastName: 'Test1', age: 34},
    {firstName: 'Text', lastName: 'Text1', age: 20},
    {firstName: 'User', lastName: 'User1', age: 87}
]

qwe = (colec) => {
    let index = 0
    let mass = []
    for (elem of colec) {
        for (let elem2 in elem) {
            mass.push(elem[elem2])
        }
        colec[index] = {
            fullname: mass[0] + ' ' + mass[1],
            age: mass[2]
        }
        index++
        mass = []
    }
    return colec
}

console.log(qwe(colec))
