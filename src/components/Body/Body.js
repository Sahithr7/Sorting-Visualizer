import React, { Component } from 'react'
import './Body.css'
import { connect } from 'react-redux'
import {resetArray} from '../../reducers/array/arrayAction'


class Body extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount = () => {
        // this.props.resetArr;
    }

    
    
    render() {
        const  array  = this.props.array
        
        
        // const bodyMargin = 10 * window.screen.width / 100
        // console.log(bodyMargin);
        return (
            <div >
                
                <div className='array-container'>
                    {array.map((value, idx) => (
                        <div
                            className='array-bar'
                            key={idx}
                            style={{ height: `${value}px` }}></div>
                    ))}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        array: state.arr.array
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetArr: () => dispatch(resetArray())
    }
}   

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Body)
