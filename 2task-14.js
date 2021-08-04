// 14. Напишите функцию range(), принимающую два аргумента:
// начало и конец диапазона, и возвращающую массив, который
// содержит все числа из диапазона, включая начальное и конечное.
// Третий необязательный аргумент функции range() – шаг для
// построения массива. Убедитесь, что функция range() работает с
// отрицательным шагом.

range = (start, end, step) => {
    let mass = [start]

    let prestep = Math.abs(Math.floor(((start) - (end)) / Math.abs(step)))

    if (start > end) {
        if (step > 0)
            step *= -1
    }
    else{
        if (step < 0)
            step *= -1
    }

    for (let i=0;i<prestep;i++)
        mass.push(start+=step)

    return mass
}

console.log(range(-14,-20,-4))
