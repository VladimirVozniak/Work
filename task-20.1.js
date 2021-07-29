let mass = [5, 2, 3, -7, 2, -10, 15, 1, -2, 40, 3]
console.log(mass)
moveElement = (arr, from, to) => {
    let temp =arr.splice(from,1,arr[to])
    arr.splice(to,1,temp[0])
    return arr
}

console.log(moveElement(mass, 0, 5))
