import React, { Component, useState } from 'react'
import HocModal from '../HOC/HocModal'
import Register from './Register'
import Login from './Login';

const LoginModal = HocModal(Login); // => Tạo ra login modal
const RegisterModal = HocModal(Register); // => Tạo ra register modal


export default class DemoModalHoc extends Component {
    state = {
        Component: LoginModal
    }
    render() {
        return (
            <div className='container'>
                <h3>Demo Higher order component Modal (HOC Modal)</h3>
                <button className='btn btn-success me-2' data-bs-toggle="modal"
                    data-bs-target="#modalId" onClick={()=>{
                        this.setState({
                            Component : LoginModal
                        })
                    }}>Open Login</button>
                <button className='btn btn-dark' data-bs-toggle="modal"
                    data-bs-target="#modalId" onClick={()=>{
                        this.setState({
                            Component:RegisterModal
                        })
                    }}>Open register</button>

                <this.state.Component />
            </div>
        )
    }
}
