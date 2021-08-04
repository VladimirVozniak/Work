// 31. Вернуть массив тех значений, которые есть в первом,
// но нет во втором

let mass = [[4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]]

qwe = (mass1, mass2) => {
    let equal = false
    return mass1.reduce((mass3, elem) => {
        for (let elem1 of mass2) {
            if (elem === elem1) {
                equal = true
                break
            }
        }
        if (!equal) {
            mass3.push(elem)
        }
        equal=false
        return mass3
    }, [])
}

console.log(qwe(mass[0], mass[1]))
