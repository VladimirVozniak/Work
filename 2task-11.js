// 11. Напишите функцию removeDuplicates(arr), которая возвращает
// массив, в котором удалены повторяющиеся элементы из массива arr
// (игнорируйте чувствительность к регистру).

let mass1 = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6]
let mass2 = ['text', 'education', 'part', 'Text']

removeDuplicates = (arr) => {
    let mass = [arr[0]]
    let duplicate = false

    arr.forEach(elem => {
        for (let elem1 of mass) {
            if (elem.toString().toLowerCase() === elem1.toString().toLowerCase()) {
                duplicate = true
                break
            }
        }
        if (!duplicate)
            mass.push(elem)
        duplicate = false
    })
    return mass
}
console.log(removeDuplicates(mass1))
