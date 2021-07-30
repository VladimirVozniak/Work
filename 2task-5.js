// 5. Вернуть true, если хоть одно значение в массиве "положительное"

arr = [-5, -3, -6, -7, -2, -7, -8, -2, 5]

pozitiveElem = (mass) => {
    for (let elem of mass) {
        if (elem > 0) {
            return true
        }
    }
    return false
}

console.log(pozitiveElem(arr))
