import {
    Button,
    Form,
    Input,
    Space,
    Table,
    Tag,
    DatePicker,
    Select,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import './index.scss'

const { RangePicker } = DatePicker

interface DataType {
    key: string
    name: string
    address: string
    tags: string[]
}

const columns: ColumnsType<DataType> = [
    {
        title: '时间',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '类型',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag === '开发' ? 'geekblue' : 'green'
                    if (tag === '测试') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        ),
    },
    {
        title: '内容',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>详情</a>
                <a>删除</a>
            </Space>
        ),
    },
]

const data: DataType[] = [
    {
        key: '1',
        name: '2021-08-01',
        address: 'New York No. 1 Lake Park',
        tags: ['普通', '开发'],
    },
    {
        key: '2',
        name: '2021-09-01',
        address: 'London No. 1 Lake Park',
        tags: ['丢失'],
    },
    {
        key: '3',
        name: '2021-10-01',
        address: 'Sydney No. 1 Lake Park',
        tags: ['生产', '测试'],
    },
]

const onFinish = (values: any) => {
    console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
}

export default function Board() {
    const [form] = Form.useForm()

    const onReset = () => {
        form.resetFields()
    }

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
            </div>
            <div className="board-list">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
