import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

class Movice extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }


    render() {
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <img className="Movie__Poster" src={this.props.poster} alt={this.props.title} />
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genre">
                        {this.props.genres.map((genre, index) => <span className="Movie__Genre" key={index}>{genre}</span>)}
                    </div>
                    <p>
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            />
                        
                    </p>
                </div>
            </div>
        );
    }
}

export default Movice;
