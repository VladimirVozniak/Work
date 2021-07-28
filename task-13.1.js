// В функцию передаем коллекцию и название ключа.
// По результату выполнения вывести массив значений по
// этому ключу всех объектов.

let obj = [{
    age: 22,
    hometown: 'Шахты'
}, {
    age: 21,
    hometown: 'Шахты'
}, {
    name: 'Саша',
    age: 33,
}, {
    name: 'Аня',
    hometown: 'Шахты'
}]
qwe = (arr, key) => {
    return arr.reduce((mass, elem) => {
        for (let key1 in elem) {
          if(key==key1)
              mass.push(elem)
        }
        return mass
    },[])
}

console.log(qwe(obj, 'age'))
