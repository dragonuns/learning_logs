import React from 'react';
import { Card } from '../UI/Card/Card';
import './LogForm.css'
// import { Date } from './Date';
export class LogForm extends React.PureComponent {
    dateChange = e => {
        this.setState({ newDate: e.target.value}
        )
    }
    contentChange = e => {
        this.setState({ newContent: e.target.value}
        )

    }
    timeChange = e => {
        this.setState({ newTime: e.target.value})
        
    }
    formSubmit = e => {
        e.preventDefault();
        if (this.state.newDate === '' ) {
           return  alert('日期不能为空')
        } 
        else {
            if(this.state.newContent === ''){
                return  alert('学习内容不能为空')
            }
            else {
                if(this.state.newTime === ''){
                    return  alert('学习时长不能为空!!!')

                }
            }
        }
        // console.log(this.state.newDate);
        let  newDate2= new Date( this.state.newDate)
        let  month= newDate2.toLocaleString('zh-CN',{month: 'numeric'})
        let   date1= newDate2.toLocaleString('zh-CN',{day: 'numeric'})
        let   year= Number(newDate2.toLocaleString('zh-CN',{year: 'numeric'}))
        let date = Number(date1.slice(0,date1.length-1))
        let newItem = {
          id: Date.now() + '',
           year,
            month,
            date,
            study: this.state.newContent,
            time: this.state.newTime
        }  
        
        // console.log(newItem.date.getMonths);
        this.setState({  newContent: '',newDate: '',newTime:''}
            )
        this.props.saveLog(newItem)
      
    }
    state = {
      
            newDate: '',
        newContent: '',
        newTime: ''
      
        
    }
    render(){
        return [
            <Card className='log_form'>
                <form onSubmit={ this.formSubmit }>
                    <div>
                        <label htmlFor='date'>日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type="date" id='date' onChange={ this.dateChange }  value={ this.state.newDate }/>
                    </div>
                    <div>
                        <label htmlFor='content'>学习内容：</label>
                        <input type="text" id='content' onChange={ this.contentChange } value={ this.state.newContent }/></div>
                    <div>
                        <label htmlFor='time'>学习时长：</label>
                        <input type="text" id='time' onChange={ this.timeChange } value={ this.state.newTime } />
                    </div>
                   
                        <button>提交</button>
                   
                    
                </form>
            </Card>
        ]
    }
}