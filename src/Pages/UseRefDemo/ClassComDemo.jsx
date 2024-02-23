//rcc
import React, { Component } from 'react'

export default class ClassComDemo extends Component {
    //thuộc tính
    state = {
        number: 1
    }
    //phương thức
    changeNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                Number: {this.state.number}
                <br />
                <button className='btn btn-primary' onClick={()=>{
                    this.changeNumber()
                }}>+</button>
            </div>
        )
    }
}
