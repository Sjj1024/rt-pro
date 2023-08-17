import { Modal } from 'antd'

export default function LogDialog(props: any) {
    const { visible, closeDialog, content } = props
    return (
        <div>
            <Modal
                title="日志详情"
                open={visible}
                onOk={closeDialog}
                onCancel={closeDialog}
            >
                <p className="dialog-log">{content}</p>
            </Modal>
        </div>
    )
}
