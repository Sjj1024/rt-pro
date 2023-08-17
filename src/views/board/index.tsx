import LogDialog from '@/components/logDialog'
import { UploadOutlined } from '@ant-design/icons'
import {
    Button,
    Form,
    Input,
    Table,
    Tag,
    DatePicker,
    Select,
    Upload,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { UploadProps } from 'antd/lib/upload/interface'
import { useEffect, useState } from 'react'
import './index.scss'
import LogApi from '@/apis/log'

const { RangePicker } = DatePicker

interface DataType {
    id: number
    key: number
    logTime: string
    type: string
    content: string
    createDate: string
    updateDate: string
}

export default function Board() {
    const [form] = Form.useForm()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [record, setRecord] = useState<{
        key: number | null
        content: string | null
    }>({ key: 1, content: null })

    const showContent = (key: number, content: string) => {
        setRecord({ key, content })
        setIsModalOpen(true)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: '时间',
            dataIndex: 'logTime',
            key: 'logTime',
            width: 200,
        },
        {
            title: '类型',
            key: 'type',
            dataIndex: 'type',
            width: 200,
            render: (_, { id, type }) => (
                <Tag color={type === 'ERROR' ? 'volcano' : 'green'} key={id}>
                    {type}
                </Tag>
            ),
        },
        {
            title: '内容',
            dataIndex: 'content',
            key: 'content',
            ellipsis: true,
            render: (_, { key, content }) => (
                <div>
                    <a
                        className="content-pre"
                        onClick={() => showContent(key, content)}
                    >
                        {content}
                    </a>
                </div>
            ),
        },
    ]

    const [data, setData] = useState<DataType[]>([])

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    const onReset = () => {
        form.resetFields()
    }

    const props: UploadProps = {
        name: 'file',
        async onChange(file) {
            const postForm = new FormData()
            postForm.append('file', file as any)
            const res = await LogApi.uploadLog(postForm)
            console.log('info-', file, postForm, res)
        },
        beforeUpload: () => {
            return false
        },
    }

    // 初始化日志信息
    const getLogs = async () => {
        // 请求日志数据
        const queryParams = {
            logStartTime: '',
            logEndTime: '',
            type: '',
            content: '',
        }
        const data = await LogApi.queryLog(queryParams)
        const dataList = data.data.reduce((pre: any, cur: any) => {
            cur['key'] = cur.id
            pre.push(cur)
            return pre
        }, [])
        setData(dataList)
        console.log('getLogs---', data, dataList)
    }

    useEffect(() => {
        getLogs()
    }, [])

    return (
        <div className="board-main">
            <div className="board-logo">RT日志监控页面</div>
            <div className="board-search">
                <Form
                    layout="inline"
                    form={form}
                    initialValues={{ layout: 'inline' }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="搜索内容" name="keyWord">
                        <Input placeholder="请输入搜索词" />
                    </Form.Item>
                    <Form.Item label="筛选类型" name="logType">
                        <Select
                            style={{ width: 120 }}
                            options={[
                                { value: 'jack', label: '生产' },
                                { value: 'lucy', label: '开发' },
                                { value: 'Yiminghe', label: '错误' },
                                {
                                    value: 'disabled',
                                    label: '严重',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="时间范围" name="timeRange">
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="button" onClick={onReset}>
                            重置
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传日志</Button>
                    </Upload>
                </div>
            </div>
            <div className="board-list">
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey={(record) => record.id}
                />
                {/* 弹窗展示 */}
                <LogDialog
                    visible={isModalOpen}
                    closeDialog={() => setIsModalOpen(false)}
                    record={record}
                    key={record.key}
                ></LogDialog>
            </div>
        </div>
    )
}
