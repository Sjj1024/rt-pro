import { useState } from 'react'
import { Button, Form, Input, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import './index.scss'

type LayoutType = Parameters<typeof Form>[0]['layout']

interface DataType {
    key: string
    name: string
    address: string
    tags: string[]
}

const columns: ColumnsType<DataType> = [
    {
        title: '开始时间',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '日志类型',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
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
        title: '日志',
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
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['普通', '开发'],
    },
    {
        key: '2',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['丢失'],
    },
    {
        key: '3',
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['生产', '测试'],
    },
]

export default function Board() {
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState<LayoutType>('inline')
    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout)
    }

    return (
        <div className="board-main">
            <div className="board-logo">RT日志监控页面</div>
            <div className="board-search">
                <Form
                    layout={formLayout}
                    form={form}
                    initialValues={{
                        layout: formLayout,
                    }}
                    onValuesChange={onFormLayoutChange}
                >
                    <Form.Item label="时间">
                        <Input placeholder="筛选时间范围" />
                    </Form.Item>
                    <Form.Item label="类型">
                        <Input placeholder="筛选类型" />
                    </Form.Item>
                    <Form.Item>
                        <Button>重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">搜索</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="board-list">
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
