export function getBubbleSortAnimation(array) {
    const n = array.length
    var animation = []

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animation.push([j, j + 1])
                animation.push([j, j + 1])
                animation.push([j, j + 1, array[j], array[j + 1]])
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return animation
}
