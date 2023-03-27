import {  MyDate } from './MyDate'
import {  StudyTime } from './StudyTime'
import { Card } from './UI/Card/Card'
import '../style.css'
import React from 'react';
import { Delete } from './Delete';
import { LogFilter } from './LogFilter';

let filterYearDatas = []
let filterMonthDatas = []
let filterDateDatas = []

export class  Log  extends React.Component {
  // show = () => {
  //   console.log(this.props.data);
  // }

  state = {
    year: 2022,
    month: '3月',
    date: 25,
    monthFlag: false,
    yearFlag: false,
    dateFlag: false,
  }
   yearChange = year => {
    this.setState({year: year})
    filterYearDatas = this.props.data.filter(item => item.year === year)
this.setState({yearFlag:true})
console.log('filterYearDatas');
console.log(filterYearDatas);

    return filterYearDatas

   }
   monthChange = month => {
    this.setState({month: month})
  filterMonthDatas = this.props.data.filter(item => item.month === month)
  console.log('filterMonthDatas');
this.setState({monthFlag:true})
  return filterMonthDatas

   }
   dateChange = date => {
    this.setState({date: date})
  filterDateDatas = this.props.data.filter(item => item.date === date)
this.setState({dateFlag:true})

  console.log('filterDateDatas');
  return filterDateDatas
   }
  //  show = () => {
  //   console.log(filterMonthDatas);
  //  }
  render() {
    
    return [

      <Card className='container'>
        {/* <p>{ this.show()
               }</p> */}
        <LogFilter 
         year={this.state.year}
         month={this.state.month} 
         date={this.state.date} 
         yearChange = {this.yearChange} 
         monthChange = {this.monthChange} 
         dateChange = {this.dateChange} 
         ></LogFilter>
        {/* <p onClick={ this.show }>111</p>, */}
        {
                       

this.state.yearFlag ? 
                    //  yearFlag = true
                    filterYearDatas.length === 0 ?  
                    <p className='none'>暂无日志</p> :  
                      
                      this.state.monthFlag ? 
                        //  yearFlag = true monthFlag = true 
                        filterMonthDatas.length === 0 ? 
                        <p className='none'>暂无日志</p> :
                        this.state.dateFlag ?  
                        //  yearFlag = true monthFlag = true  dateFlag  = true
                        filterYearDatas.filterMonthDatas.filterDateDatas.length === 0 ? 
                        <p className='none'>暂无日志</p> : 
                        filterYearDatas.filterMonthDatas.filterDateDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) : 
                        //  yearFlag = true monthFlag = true  dateFlag  = false
                        filterYearDatas.filterMonthDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>)
                        //  yearFlag = true monthFlag = false 
                         :  this.state.dateFlag ?  
                        //  yearFlag = true monthFlag = false  dateFlag  = true 
                         filterYearDatas.filterDateDatas.length === 0 ? 
                         <p className='none'>暂无日志</p> : 
                         filterYearDatas.filterDateDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) : 
                        //  yearFlag = true monthFlag = false  dateFlag  = false 
                        filterYearDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>)
                      //  yearFlag = false     
                      : this.state.monthFlag ? 
                      //  yearFlag = false monthFlag = true 
                      filterMonthDatas.length === 0 ? 
                      <p className='none'>暂无日志</p> :
                      this.state.dateFlag ?  
                      //  yearFlag = fallse monthFlag = true dateFlag = true
                      filterMonthDatas.filterDateDatas.length === 0 ? 
                      <p className='none'>暂无日志</p> :
                      filterMonthDatas.filterDateDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) : 
                      //  yearFlag = fallse monthFlag = true dateFlag = false 
                      filterMonthDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) 
                      : 
                      //  yearFlag = fallse monthFlag = false
                      this.state.dateFlag ?  
                      //  yearFlag = fallse monthFlag = false dateFlag = true 
                      filterDateDatas.length === 0 ?  
                      <p className='none'>暂无日志</p> :
                      filterDateDatas.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime><Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) :
                      //  yearFlag = fallse monthFlag = false dateFlag = false 
                      this.props.data.length === 0 
                                             ? 
                                              <p className='none'>暂无日志</p> 
                                              : this.props.data.map(item => <Card className='item' key={ item.id } ><MyDate   {...item}></MyDate><StudyTime  {...item}></StudyTime> <Delete removeItem={this.props.removeItemById} itemId={item.id}></Delete></Card>) 
          }
          </Card>
        ]
          
        }
      }
    

  

