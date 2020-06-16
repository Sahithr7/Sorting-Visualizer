export function getQuickSortAnimation(array) {
    const animation = []
    var n = array.length
    if (array.length <= 1) return array
    quickSort(array, 0, n - 1, animation)
    return animation
}

function partition(array, low, high, animation) {
    var i = low - 1
    var pivot = array[high]
    
    for (let j = low; j < high; j++) {
        
        if (array[j] < pivot) {

            i = i + 1
            swap(array, i, j, animation)
        }

    }
    swap(array, i + 1, high, animation)

    return (i + 1)
         
    
}

function quickSort(array, low, high, animation){
    if (low < high) { 
  
        var pi = partition(array, low, high, animation) 
  
        quickSort(array, low, pi - 1, animation)
        quickSort(array, pi + 1, high, animation)
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


