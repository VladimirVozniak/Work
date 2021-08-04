// 30. Возвращает массив, где каждый элемент продублирован

let arr = [6, 2, 9, 1, 7, 4, 7]

qwe = (arr) => {
    for (i = arr.length - 1; i >= 0; i--) {
        arr.splice(i, 1, arr[i],arr[i])
    }
    return arr
}

console.log(qwe(arr));
