import React, { Component } from 'react';

import PortfolioItem from "./portfolioitem"
import portfolioitem from './portfolioitem';

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>portfolio items go here</h2>
                <PortfolioItem />
            </div>
        )
    }
}