import React, { Component } from 'react';

import PortfolioItem from "./portfolioitem"


export default class PortfolioContainer extends Component {
    constructor() {
        super()
        console.log("Portfolio container have rendered")
    }
    render() {
        return (
            <div>
                <h2>portfolio items go here</h2>
                <PortfolioItem />
            </div>
        )
    }
}