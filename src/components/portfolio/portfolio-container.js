import React, { Component } from 'react';

import PortfolioItem from "./portfolioitem"




export default class PortfolioContainer extends Component {
    constructor() {
        super()
        console.log("Portfolio container have rendered")
    }

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe"]

        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"} />
        }) 
        
    }

    render() {
        return (
            <div>
                <h2>portfolio items go here</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}