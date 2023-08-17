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
import { useState } from 'react'
import './index.scss'

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

    const [record, setRecord] = useState('')

    const showContent = (content: string) => {
        setRecord(content)
        setIsModalOpen(true)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: '时间',
            dataIndex: 'logTime',
            key: 'logTime',
            width: 200,
            ellipsis: true,
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
            render: (_, { content }) => (
                <div>
                    <span
                        className="content-pre"
                        onClick={() => showContent(content)}
                    >
                        {content}
                    </span>
                </div>
            ),
        },
    ]

    const data: DataType[] = [
        {
            id: 1,
            key: 1,
            logTime: '2023-08-14 18:22:12',
            type: 'ERROR',
            content:
                'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
            createDate: '2023-08-16T16:50:39',
            updateDate: '2023-08-16T16:50:39',
        },
        {
            id: 2,
            key: 2,
            logTime: '2023-08-14 18:22:12',
            type: 'ERROR',
            content:
                'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
            createDate: '2023-08-16T16:50:39',
            updateDate: '2023-08-16T16:50:39',
        },
        {
            id: 3,
            key: 3,
            logTime: '2023-08-14 18:22:12',
            type: 'ERROR',
            content:
                'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
            createDate: '2023-08-16T16:50:39',
            updateDate: '2023-08-16T16:50:39',
        },
        {
            id: 4,
            key: 4,
            logTime: '2023-08-14T18:22:12',
            type: 'INFO',
            content:
                'com.zetyun.sinkops.KuduSinkAction                            [] - Exception',
            createDate: '2023-08-16T16:50:39',
            updateDate: '2023-08-16T16:50:39',
        },
        {
            id: 5,
            key: 5,
            logTime: '2023-08-14T18:22:12',
            type: 'INFO',
            content:
                'com.zetyun.sinkops.BatchOperation                            [] - updateAfter: {termostype=PCDH5WebViewController, productid=PCDH5WebViewController|mdButton_EventTouchUpInside:withEvent:, behaviorstatus=-, language=follow_system_zh-Hans-CN, userid=14936158510, refviewid=-, resolution=1290*2796, behaviortype=NebulaTech, alipayproductid=161BC41281604_IOS-uat1, user_sessionid=-, producertype=c, inner_version=-, utdid=Y41HzF2GQgcDAJduUmZToqle, lbslabel=-, cpu_max_freq=-, version=3, app_channel=-, requestid=-, thread_name=-, termtype=PCDH5WebViewController, subapplicationversion=-, server_location=ip=183.195.2.234^country=�й�^province=�Ϻ�^city=�Ϻ�^district=XX^isp=�ƶ�^header=H5-VM, analysis_code=348, alipayproductversion=7.2.8, seed=H5_AL_JSAPI_RESULT_ERROR, device_model=iPhone15 3, behaviorid=clicked, behaviorstatusmsg=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html|https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reInput.html__Y41HzF2GQgcDAJduUmZToqle__OdpaFNh_, subapplicationid=20221004, total_mem=-, productversion=Adb22d7e658b88e6beb2c92009071dbac, network=WIFI|�й��ƶ�, viewid=-, lbslocation=-, hot_patch=-, exinfo3=jsapiName=getUserInfoEx^params=^code=1^msg=�ӿڲ�����, exinfo4=appId=20221004^version=0.0.0.55^url=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html^referer=https://20211004.uat1_mbank.bosc.com/financial/financialList/home.html^h5Token=6ed3561fc2308fdee7fdd3fc19fc74a0^isEntrance=NO^refviewId=PCDH5WebViewController^h5SessionToken=2e6751f113f161d2a9a1aaedeef70261^log_release_type=ONLINE^sourceId=20211004^token=Adb22d7e658b88e6beb2c92009071dbac^isTinyApp=NO^viewId=PCDH5WebViewController^webViewVersion=WKWebView^mp_baseline=v10.2.3.11^mp_module=NebulaTech, exinfo1=https://20221004.uat1_mbank.bosc.com/fncD709Pro/redeem/reResult.html, exinfo2=-, os_version=16.0.3, productchannel=1000, log_time=2023-08-14 18:22:07.935, url=2, bundle_version=VoiceOver=0^TimeZone=Asia/Shanghai, tcid=Y41HzF2GQgcDAJduUmZToqle, awid=0B0E6169-44C7-413C-BEE2-D255B17B84D8, logtime=2023-08-14 18:22:07:221, cpu_core_num=-, promotion=-, commit_ts=null, serialize_ts=null, etl_ts=1692008532103}',
            createDate: '2023-08-16T16:50:40',
            updateDate: '2023-08-16T16:50:40',
        },
    ]

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
        previewFile(file) {
            console.log('file', file)
            return new Promise(() => {})
        },
        onChange(info) {
            console.log('info-', info)
        },
        beforeUpload: () => {
            return false
        },
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
                <div>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传日志</Button>
                    </Upload>
                </div>
            </div>
            <div className="board-list">
                <Table columns={columns} dataSource={data} />
                {/* 弹窗展示 */}
                <LogDialog
                    visible={isModalOpen}
                    closeDialog={() => setIsModalOpen(false)}
                    content={record}
                ></LogDialog>
            </div>
        </div>
    )
}
