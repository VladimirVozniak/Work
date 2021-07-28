// В функцию подается название свойства. Если свойство
// присутствует в объекте вывести "Exist", если отсутсвует
// вывести сообщение "No exist".

let obj = {
    name: 'Вова',
    age: 22,
    hometown: 'Шахты'
}
qwe = (arr, param) => {
     for(let elem in arr){
         if (elem==param)
             return 'Exist'
     }
     return 'No exist'
}

console.log(qwe(obj, 'age'))
