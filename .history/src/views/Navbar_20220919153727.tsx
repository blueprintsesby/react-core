import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="list">
                    <ul>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}