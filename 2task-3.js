// 3. В функцию подается 2 массива: 1 ключи, 2 значения.
// Сформировать объект.

let a = ['name', 'age', 'country'];
let b = ['test', 25, 'RF'];

arraysToObj = (a, b) => {
    let obj = {}
    a.forEach((elem, index) => {
        obj[elem] = b[index]
    })
    return obj
}

console.log(arraysToObj(a, b))
