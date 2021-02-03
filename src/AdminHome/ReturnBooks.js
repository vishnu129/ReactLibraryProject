import React, { Component } from 'react'
import Header from './header';

export default class ReturnBooks extends Component {
    render() {
        return (
            <div>
              <Header name="User Name" />
                <h2>No Returns</h2>
            </div>
        )
    }
}
