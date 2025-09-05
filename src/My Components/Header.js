import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {
    const location = useLocation();

    const navLinkStyle = (path) => {
        return {
            color: location.pathname === path ? '#ffa94d' : 'white',
            position: 'relative',
            transition: 'color 0.3s ease',
            textDecoration: 'none',
            padding: '0.5rem 1rem'
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color: '#ffa94d'}}>
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={navLinkStyle('/')}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={navLinkStyle('/about')}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {props.searchBar && (
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-light hover-glow" type="submit">
                                Search
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}