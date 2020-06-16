var n

export const getHeapSortAnimation = (array) => {
    const animation = []
    n = array.length;
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heap_root(array, n, i, animation);
    }
    for (i = array.length - 1; i > 0; i--) {
        swap(array, 0, i, animation);


        heap_root(array, i, 0, animation);
    }

    return animation
}


function heap_root(array, n, i, animation) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < n && array[left] > array[max]) {
        max = left;
    }

    if (right < n && array[right] > array[max]) {
        max = right;
    }

    if (max !== i) {
        swap(array, i, max, animation);
        heap_root(array, n, max, animation);
    }
}

function swap(array, index_A, index_B, animation) {
    var temp = array[index_A];
    animation.push([index_A, index_B])
    animation.push([index_A, index_B])
    animation.push([index_A, index_B, array[index_A], array[index_B]])
    array[index_A] = array[index_B];
    array[index_B] = temp;
}


