import React from 'react'
import './Backdrop.css'
import ReactDOM from 'react-dom';

export class Backdrop extends React.PureComponent {
    render() {
        return ReactDOM.createPortal( <div className='back_drop'>{ this.props.children}</div>, document.getElementById("backdrop_root"))
    }
}