import * as React from 'react'
import "../css/task.less"
import { Button, Modal } from 'antd';

interface DeliveryTaskListProps {
}
interface DeliveryTaskListStates {
    isModal: boolean
    inf: { name: string, age: number, sex: string }
    
}

/**
 * 上传任务列表
 * 
 * @author 
 */
export class DeliveryTaskList extends React.Component<DeliveryTaskListProps, DeliveryTaskListStates> {

    constructor(props: DeliveryTaskListProps) {
        super(props);
        this.state = {
            isModal: false,
            inf: {
                name: 'qcq',
                age: 24,
                sex: '男'
            }
        }
    }

    private isModalOpen = (isModal: boolean) => {
        this.setState({
            isModal
        })
    }


    /**
     * 修改信息
     */
    private updateInf = () => {
        const { inf } = this.state
        // this.setState({
        //     inf: { ...this.state.inf, name: 'lr', age: 18 }
        // })
        inf['price'] = 500
        this.setState({
            inf
        })
    }

    componentDidMount(): void {

    }

    render() {
        const { isModal, inf } = this.state
        return <div className='header'>
            <Button type="primary" onClick={() => this.isModalOpen(true)}>Button</Button>
            <Modal title="Basic Modal" open={isModal} onCancel={() => this.isModalOpen(false)}>
                {
                    Object.keys(inf).map((v, i) => {
                        //加上kye={i}，控制台就不会报错
                        return <p key={i}>{inf[v]}</p>
                    })
                }
                <Button type="primary" onClick={this.updateInf}>修改信息</Button>
            </Modal>
            <div className='nav'>
                <div className='nav2'></div>
            </div>
            <div className='nav3'>
                <div className='nav4'><span style={{ textDecoration: 'underline red' }}>da</span></div>
            </div>
            <div className='nav5'>
                <div className='nav6'></div>
            </div>
        </div >
    }
}

