import React from 'react';
import '../style.css'
 export  class  MyDate  extends React.PureComponent {
    render() {
      return (
<div className='date'>
<div
className='top'>
  <h1>
  {this.props.month }

  </h1>
</div>
<div
className='bottom'>
  <h1>
  {this.props.date }
   
  </h1>
</div>
          </div>
      )
    }
  }