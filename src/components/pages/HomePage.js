import React, { Component } from "react";
import PropTypes from 'prop-types';

import ActorList from '../ActorList';

class HomePage extends Component{
    state = {
        actors: [
            {
                name: 'Marlon Brando',
                description: 'Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem.',
                photo: 'https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR97,0,214,317_AL_.jpg'
            }, 
            {
                name: 'Ingrid Bergman',
                description: "Ingrid Bergman was one of the greatest actresses from Hollywood's lamented Golden Era. Her natural and unpretentious beauty and her immense acting talent made her one of the most celebrated figures in the history of American cinema.",
                photo: 'https://m.media-amazon.com/images/M/MV5BMTYzMTgzMTIwOV5BMl5BanBnXkFtZTYwNzI5MzI2._V1_UY317_CR20,0,214,317_AL_.jpg'
            }
        ]
    };

    static propTypes = {

    };

    render(){
        return (
            <div>
                <ActorList actors={this.state.actors}/>
            </div>
        );
    }
}

export default HomePage;