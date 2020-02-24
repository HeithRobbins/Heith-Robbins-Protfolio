import React, { Component } from 'react'

export default class navigationComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <button>Home</button> 
            <button>About</button>   
            <button>Contact</button>   
            <button>Blog</button>   
            {false ? <button>Add Blog</button> : null}  
            </div>
        )
    }
}