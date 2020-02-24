import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class navigationComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <NavLink exact to="/">
              Home
            </NavLink> 
            <NavLink to="/about-me">
              About
            </NavLink>
            <button>Contact</button>   
            <button>Blog</button>   
            {false ? <button>Add Blog</button> : null}  
            </div>
        )
    }
}