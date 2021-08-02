// 13. В коллекции изменить значение свойства во всех элементах

let objs = [
    {firstName: 'Test', lastName: 'Test1', age: 34},
    {firstName: 'Text', lastName: 'Text1', age: 20},
    {firstName: 'User', lastName: 'User1', age: 87}
]

qwe = (colec,key,val) => {
    colec.forEach(elem => {
        for (let elem1 in elem) {
            if(elem1===key)
                elem[elem1]=val
        }
    })
    return colec
}

console.log(qwe(objs, 'firstName', 32))
