// 33. Реализуйте функцию, которая принимает на вход объект
// и возвращает массив-пар.

let colec = [{'dog': 6, 'cat': 11}]

qwe = (colec) => {
    return colec.reduce((mass, elem) => {
        for (let elem1 in elem) {
           mass.push([elem1,elem[elem1]])
        }
        return mass
    }, [])
}

console.log(qwe(colec))
