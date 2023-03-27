import './style.css'
import React from 'react'
 import {Log} from './Components/Log'
 import {LogForm} from './Components/LogForm/LogForm'
 import ReactDOM from 'react-dom/client'
let originArr = [] 
let resultArr = [] 
export class LogApp extends React.PureComponent {
  saveLog = newItem => {
         this.setState( {
            data:   [newItem, ...this.state.data ]
         }
          )
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
  
render() {
    
     return [
 
        <LogForm saveLog={ this.saveLog }/>,
        <Log data={ this.state.data } removeItemById={this.removeItemById} ></Log>

        
    ]
}

}
ReactDOM.createRoot (document.querySelector('#root')).render([
  <LogApp  />
  ])