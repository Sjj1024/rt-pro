import { Button, Modal } from 'antd'

export default function LogDialog(props: any) {
    const { visible, closeDialog, record } = props
    return (
        <>
            <Modal
                title="日志详情"
                centered
                width={700}
                open={visible}
                onOk={closeDialog}
                onCancel={closeDialog}
                footer={[
                    <Button type="primary" key="modalKey" onClick={closeDialog}>
                        确定
                    </Button>,
                ]}
            >
                <p className="dialog-log">{record.content}</p>
            </Modal>
        </>
    )
}
