import React from 'react';
import { Backdrop } from '../Backdrop/Backdrop';
import { Card } from '../Card/Card';
import './ConfirmModal.css'
export class ConfirmModal extends React.PureComponent {
//     click = props => {
// this.props.isShow = !this.state.isShow
//     }
    render() {
        return [
            <Backdrop>
 <Card className='confirm_modal'>
                <div>
                    <p>删除后无法恢复,是否确认删除？</p>
                    <button className='yesBtn' onClick={this.props.isConfirm}>确认</button>
                    <button onClick={this.props.isCancel}>取消</button>
                </div>
            </Card>
            </Backdrop>
           
        ]
    }
}