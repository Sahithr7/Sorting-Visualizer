import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Toolbar.css'
import { resetArray, resetSpeed } from '../../reducers/array/arrayAction'
import { mergeSort } from '../../algorithms/mergeSort/mergeSort'
import { heapSort } from '../../algorithms/heapSort/heapSort'
import { bubbleSort } from '../../algorithms/bubbleSort/bubbleSort'
import { quickSort } from '../../algorithms/quickSort/quickSort'

class Toolbar extends Component {
    // constructor(props) {
    //     super(props)
    // }

    handleClick(algorithm) {
        if (algorithm === 'Merge-sort') {
            mergeSort(this.props.array, this.props.speed)
        }
        else if (algorithm === 'Heap-sort') {
            heapSort(this.props.array, this.props.speed)
        }
        else if (algorithm === 'Bubble-sort') {
            bubbleSort(this.props.array, this.props.speed)
        }
        else if (algorithm === 'Quick-sort') {
            quickSort(this.props.array, this.props.speed)
        }
    }


    render() {
        const color = 'rgba(214, 9, 29, 0.8)'

        return (
            <div className='footer'>
                <div className='text-part' onClick={() => this.handleClick('Merge-sort')}>Merge Sort</div>
                <div className='text-part' onClick={() => this.handleClick('Heap-sort')}>Heap Sort</div>
                <div className='text-part' onClick={() => this.handleClick('Bubble-sort')}>Bubble Sort</div>
                <div className='text-part' onClick={() => this.handleClick('Quick-sort')}>Quick Sort</div>

                <label></label>
                <input
                    type="range"
                    min="50"
                    id='myRange'
                    max="250"
                    style={{ background: color, cursor: 'pointer' }}
                    defaultValue='150'
                    onChange={this.props.changeLen}
                />

                <label></label>
                <input
                    type="range"
                    min="1"
                    id='mySpeed'
                    max="100"
                    style={{ background: color, cursor: 'pointer' }}
                    defaultValue='5'
                    onChange={this.props.changeSpeed}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        array: state.arr.array,
        speed: state.arr.animationSpeed
    }
}

const mapDispatchToProps = dispatch => ({
    changeLen: () => dispatch(resetArray()),
    changeSpeed: () => dispatch(resetSpeed())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)
