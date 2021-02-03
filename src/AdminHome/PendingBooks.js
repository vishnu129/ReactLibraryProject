import React, { Component } from 'react'
import Header from "./header";
export default class PendingBooks extends Component {
    render() {
        return (
            <div>
                  <Header name="User Name" />
                <h2>No pending books</h2>
            </div>
        )
    }
}
