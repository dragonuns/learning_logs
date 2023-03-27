import React from 'react';
import '../style.css'

export class  LogFilter  extends React.Component {
    windowLoad = () => {}
    changeYear = e => {
        this.props.yearChange(Number(e.target.value))
    }
    changeMonth = e => {
        this.props.monthChange(e.target.value)
    }
    changeDate = e => {
        this.props.dateChange(e.target.value)
    }
    render() {
        
        return [
            <div className='log_filter'>
         年份:<select value={this.props.year} onChange={this.changeYear} >
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
         月份:<select value={this.props.month} onChange={this.changeMonth}>
                    <option value="1月">1月</option> 
                    <option value="2月">2月</option>
                    <option value="3月">3月</option>
                    <option value="4月">4月</option>
                    <option value="5月">5月</option>
                    <option value="6月">6月</option>
                    <option value="7月">7月</option>
                    <option value="8月">8月</option>
                    <option value="9月">9月</option>
                    <option value="10月">10月</option>
                    <option value="11月">11月</option>
                    <option value="12月">12月</option>
             </select>
          日:<select value={this.props.date} onChange={this.changeDate}>
                    <option value="1">1</option> 
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option> 
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                     <option value="25">25</option>
                     <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
             </select>
            </div>
        ]
    }
}