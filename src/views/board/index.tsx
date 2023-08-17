import LogDialog from '@/components/logDialog'
import { SearchOutlined, UploadOutlined } from '@ant-design/icons'
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
        <a
          className="content-pre"
          onClick={() => showContent(key, content)}
        >
          {content}
        </a>
      ),
    },
  ]

  const [data, setData] = useState<DataType[]>([])

  // 搜索loading
  const [loading, setLoading] = useState(false)

  // 点击搜索按钮
  const onSearch = (values: any) => {
    console.log('Success:', values)
    setLoading(true)
    const start = values.timeRange ? values.timeRange[0] : 0
    const end = values.timeRange ? values.timeRange[1] : 0
    const queryParams = {
      logStartTime: start ? `${start.$y}-${start.$M + 1}-${start.$D} ${start.$H
        }:${start.$m}` : "",
      logEndTime: end ? `${end.$y}-${end.$M + 1}-${end.$D} ${end.$H}:${end.$m}` : "",
      type: values.type || "",
      content: values.content || "",
      pageSize: 20,
      pageNum: 1
    }
    console.log('queryParams', queryParams)
    getLogs(queryParams)
  }


  const onReset = () => {
    form.resetFields()
  }

  const props: UploadProps = {
    name: 'file',
    async onChange(file) {
      const postForm = new FormData()
      console.log("file---", file.file);
      postForm.append('file', file.file as any)
      const res = await LogApi.uploadLog(postForm)
      console.log('info-', file, postForm, res)
    },
    beforeUpload: () => {
      return false
    },
  }

  // 初始化日志信息
  const getLogs = async (query?: any, page?: number | null, pageSize?: number | null) => {
    // 请求日志数据
    const queryParams = query || {
      logStartTime: '',
      logEndTime: '',
      type: '',
      content: '',
      pageNum: page || 1,
      pageSize: pageSize || 20
    }
    const data = await LogApi.queryLog(queryParams)
    const dataList = data.data.list.reduce((pre: any, cur: any) => {
      cur['key'] = cur.id
      pre.push(cur)
      return pre
    }, [])
    setData(dataList)
    setTotal(data.data.total)
    setLoading(false)
    console.log('getLogs---', data, dataList)
  }

  const pageHandle = (page: any, pageSize: any) => {
    console.log("页码变化", page, pageSize);
    getLogs(null, page, pageSize)
  }

  // 分页查询
  const [total, setTotal] = useState(0)
  const pageSet = {
    defaultCurrent: 1,
    defaultPageSize: 20,
    total: total,
    pageSizeOptions: [20, 40, 60, 80, 100],
    onChange: pageHandle
  }

  useEffect(() => {
    getLogs()
  }, [])

  return (
    <div className="board-main">
      <div className="board-logo">RT日志监控分析</div>
      <div className="board-search">
        <Form
          layout="inline"
          form={form}
          initialValues={{ layout: 'inline' }}
          onFinish={onSearch}
        >
          <Form.Item label="搜索内容" name="content">
            <Input placeholder="请输入搜索词" allowClear />
          </Form.Item>
          <Form.Item label="筛选类型" name="type">
            <Select
              style={{ width: 120 }}
              options={[
                { value: 'INFO', label: 'INFO' },
                { value: 'ERROR', label: 'ERROR' },
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
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />} loading={loading}>
              搜索
            </Button>
          </Form.Item>
        </Form>
        <div>
          <Upload {...props}>
            <Button className='upload-btn' icon={<UploadOutlined />}>上传日志</Button>
          </Upload>
        </div>
      </div>
      <div className="board-list">
        <Table
          columns={columns}
          dataSource={data}
          pagination={pageSet}
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
