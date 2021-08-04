// 24. Отфильтровать коллекцию по нескольким полям

let colec = [
    {name: 'test', age: 34, country: 'RF'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
]

qwe = (colec, val1, val2) => {
    let count = 0
    return colec.reduce((mass, elem) => {
            count = 0
            for (let elem2 in elem) {
                if (elem[elem2] === val1 || elem[elem2] > val2) {
                    count++
                }
                if (count == 2) {
                    mass.push(elem)
                    break
                }
            }
            return mass
        }, [])
}

console.log(qwe(colec, 'RF', 18))
