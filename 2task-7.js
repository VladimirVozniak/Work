// 7. Дан массив с числами. Узнайте сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось больше 10-ти.

let mass = [4, 5, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6]

qwe = (arr) => {
    let sumNumber = 0
    let count = 0
    for (let elem of arr) {
        if (sumNumber + elem <= 10) {
            sumNumber += elem
            count++
        } else {
            count++
            return count
        }
    }
}

console.log(qwe(mass))
