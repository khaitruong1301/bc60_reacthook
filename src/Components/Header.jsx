/* rafce */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Shoes Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">Search</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="use-state-demo1">Use state - change number</NavLink>
                            <NavLink className="dropdown-item" to="use-state-demo2">Use state - Form User</NavLink>
                            <NavLink className="dropdown-item" to="use-effect-basic">Use effect - basic</NavLink>
                            <NavLink className="dropdown-item" to="use-effect-didmount">Use effect - didmount</NavLink>
                            <NavLink className="dropdown-item" to="use-effect-unmount">Use effect - unmount</NavLink>
                            <NavLink className="dropdown-item" to="use-callback-demo">Use callback demo</NavLink>
                            <NavLink className="dropdown-item" to="use-memo-demo">Use memo demo</NavLink>
                            <NavLink className="dropdown-item" to="use-ref-dom">Use ref dom</NavLink>
                            <NavLink className="dropdown-item" to="use-ref-demo">Use ref demo</NavLink>
                            <NavLink className="dropdown-item" to="custom-hook-demo">Custom hook</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook - redux</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="use-redux-change-number">Redux - change number</NavLink>
                            <NavLink className="dropdown-item" to="use-redux-fake-book-app">
                                Redux - Fake book app</NavLink>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default Header