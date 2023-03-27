import './card.css'
import React from 'react';

export class Card extends React.PureComponent {

render() {
    return [
                <div className={ `card ${this.props.className}`}>
                {
                    this.props.children
                }
                </div>
           ]
        }
    

}