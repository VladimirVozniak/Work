// 32. Вернуть отсортированный массив уникальных значений
//
let arr = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]

sorter = (a, b) => {
    return a - b
}

qwe = (arr) => {
    arr.sort(sorter)
    let mass = []
    let dublicate
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]||arr[i]===dublicate)
            dublicate = arr[i]
        else {
            mass.push(arr[i])
        }
    }
    return mass
}

console.log(qwe(arr));
