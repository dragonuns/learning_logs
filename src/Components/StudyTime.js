import React from 'react';
import '../style.css'

 export class  StudyTime  extends React.PureComponent {
  state={
    study: ''
  }
    render() {
      return (
<div className='study_time'>
<div
className='top'>
  <h1>
    {this.props.study }
  </h1>
</div>
<div
className='bottom'>
  <h1>
  {this.props.time }

  </h1>
</div>
          </div>
      )
    }
  }