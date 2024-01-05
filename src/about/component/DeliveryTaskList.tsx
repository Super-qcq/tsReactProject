import * as React from 'react'
import "./task.less"
import { Button, Modal } from 'antd';

interface DeliveryTaskListProps {
}
interface DeliveryTaskListStates {
    isModal: boolean
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
            isModal: false
        }
    }

    private isModalOpen = (isModal: boolean) => {
        this.setState({
            isModal
        })
    }

    componentDidMount(): void {

    }

    render() {
        const { isModal } = this.state
        return <div className='header'>
            <Button type="primary" onClick={() => this.isModalOpen(true)}>Button</Button>
            <a href='http://localhost:8080/dist/home/index.html'>dsadasda</a>
            <Modal title="Basic Modal" open={isModal} onCancel={() => this.isModalOpen(false)}>
                <p>dsaSome contents...</p>
                <p>Some contents...</p>
                <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqSome contents...</p>
            </Modal>
        </div >
    }
}

