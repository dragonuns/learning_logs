import '../style.css'
import React from 'react'
 import {Log} from './Log'
 import {LogForm} from './LogForm/LogForm'
// import { BackDrop } from './UI/BackDrop'
// import { ConfirmModal } from './UI/ConfirmModal/ConfirmModal'
//  let logData = []
// let arr = [] 
let originArr = [] 
let resultArr = [] 
export class LogApp extends React.PureComponent {
  saveLog = newItem => {
        // console.log(newItem)
        // this.state.data = this.state.data.unshift(newItem)
         this.setState( {
            data:   [newItem, ...this.state.data ]
         }
          )
      //     arr = this.state.data
      //  console.log(arr)
    }
 removeItemById = id => {
      // console.log(id);
      originArr = this.state.data
      resultArr = originArr.filter(item => item.id !== id)
      console.log(originArr);
      console.log(resultArr);
       
        this.setState({ data: resultArr})
        console.log(this.state.data);
      } 
    state = {
         data : [{
                   year: 2023,
                   id: '1679707515937',
                  month: '3月',
                  date: 24,
                  study: 'React',
                  time: '2小时'
                 },
                {
                  year: 2023,
                  id: '1679707515938',
                  month: '3月',
                  date: 22,
                  study: 'Vue',
                  time: '4小时'
                },
                {
                  year: 2023,
                  id: '1679707515939',
                  month: '3月',
                  date: 25,
                  study: 'Angular',
                  time: '1小时'
                },
                {
                  year: 2023,
                  id: '1679707515940',
                  month: '3月',
                  date: '22',
                  study: 'Python',
                  time: '2小时'
                }
        ]
    }
    goAbout = () => {
        this.props.history.push('/about')
        // console.log(this.props.data);
      }
    goBack = () => {
        this.props.history.go(-1)
      }
    goForward = () => {
        this.props.history.go(1)
      }
    // show = () => {
    //     arr = this.state.data
    //    console.log(arr)

    //   }
  
render() {
    
     return [
  
<p key={ 22}>我是学习日志</p>,
        // <p >{this.show()}</p>,
        // <p onClick={this.show}>111</p>,
      <button onClick={ this.goAbout  }  className='btn' key={ 21}>转到我是About</button>,
      <button onClick={ this.goBack }  className='btn' key={ 23}>后退</button>,
      <button onClick={ this.goForward } className='btn' key={ 24}>前进</button>,
        <LogForm saveLog={ this.saveLog }/>,
        <Log data={ this.state.data } removeItemById={this.removeItemById} ></Log>

        
    ]
}

}
