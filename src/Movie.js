import React, { Component } from 'react';
import './Movie.css';

class Movice extends Component{
    render() {
        return (
            <div>
                <img src={this.props.poster} alt={this.props.title} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Movice;
