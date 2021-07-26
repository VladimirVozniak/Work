let arr = [1, 2, 3, 7, 2, 10, 15, 1, 2, 40, 3]

wasd = (array, val) => {
        return array.filter(elem => elem === val)
}
console.log(wasd(arr, 3));
