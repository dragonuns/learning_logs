import React from 'react';
import '../style.css'
import { Card } from './UI/Card/Card';
import { ConfirmModal } from './UI/ConfirmModal/ConfirmModal';

export class  Delete  extends React.PureComponent {
    removeItem = e => {
        this.setState({isOk: true,isShow: true}
        )
        // let isDel =   window.confirm('删除后无法恢复,是否确认删除？')
      
        // if( this.state.isOk ){
        //     // alert("删除成功！")
        //     this.isConfirm()
        //     // console.log(this.props.removeItem(this.props.itemIndex));
        //  }
        // }
    }
    IsShow = () => {
        this.setState(() => {
            return {
                state: {
                    isShow: true
                }
            }
        }
        )
        // console.log(this.state.isShow);
   
    

    }
    isConfirm = () => {
        this.setState( {isOk: true,isShow: false})
        this.props.removeItem(this.props.itemId)
        alert("删除成功！")

    }    
    isCancel = () => {
        this.setState( {isShow: false,isOk: false})
    }  
     
    
    state={
        isShow: false,
        isOk: true
    }
    render(){
        return [
            <Card>
                { this.state.isShow ? <ConfirmModal isCancel={this.isCancel} isConfirm={this.isConfirm} isShow={this.isShow}></ConfirmModal> : null}
            </Card>,
            <button className='delete' onClick={this.removeItem}>删除</button>

           
        ]
    }
}