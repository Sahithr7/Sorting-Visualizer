import { getQuickSortAnimation } from "./quickSortAnimation";


const PRIMARY_COLOR = 'lightblue';
const SECONDARY_COLOR = 'red';


export function quickSort(array, ANIMATION_SPEED_MS) {
    const animations = getQuickSortAnimation(array);
    for (let i = 0; i < animations.length; i++) {
        
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        
        if (isColorChange) {

            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {

                const [barOneIdx, barTwoIdx, heightOne, heightTwo] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                barOneStyle.height = `${heightTwo}px`;
                barTwoStyle.height = `${heightOne}px`

            }, i * ANIMATION_SPEED_MS);
        }
    }
}

