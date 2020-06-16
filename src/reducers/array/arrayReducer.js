const initialState = {
    array: [575, 127, 286, 523, 396, 59, 594, 303, 503, 212, 531, 417, 25, 577, 212, 446, 192, 230, 460, 282, 468, 284, 164, 528, 250, 98, 510, 90, 225, 340, 360, 11, 432, 453, 240, 475, 31, 527, 419, 584, 278, 547, 29, 586, 521, 268, 519, 233, 137, 535, 496, 207, 577, 509, 118, 49, 458, 62, 307, 16, 330, 318, 406, 548, 402, 284, 58, 61, 552, 139, 565, 370, 440, 400, 430, 205, 473, 217, 420, 533, 115, 367, 247, 374, 217, 259, 235, 87, 432, 434, 48, 274, 206, 55, 85, 275, 354, 474, 66, 496, 498, 136, 376, 12, 251, 402, 13, 329, 206, 41, 117, 228, 213, 162, 55, 104, 188, 409, 576, 249, 466, 297, 292, 115, 79, 419, 346, 66, 488, 571, 500, 257, 220, 223, 286, 348, 249, 340, 190, 181, 283, 300, 584, 238, 204, 579, 561, 421, 166, 22, 640],
    arrLen: 150,
    animationSpeed: 5
}

const arrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_ARRAY':
            const arr = resetArray()
            return {
                ...state,
                array: arr
            }

        case 'RESET_SPEED':

            var y = document.getElementById("mySpeed").value
            return {
                ...state,
                animationSpeed: y
            }
        default: return state
    }
}

const resetArray = () => {
    var x = document.getElementById("myRange").value
    const arr = []
    const arrLen = x
    for (let i = 0; i < arrLen; i++) {
        arr.push(randomInt(50, 630))
    }
    arr.push(640)
    return arr
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default arrayReducer