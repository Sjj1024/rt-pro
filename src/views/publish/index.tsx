import TextArea from 'antd/es/input/TextArea'
import './index.scss'

export default function Publish() {
    return (
        <div className="pub-main">
            <div className="pub-title">
                <input
                    type="text"
                    placeholder="请输入文章标题(1-100字符)"
                    className="pub-title"
                />
            </div>
            <hr />
            <div className="pub-content">
                <TextArea rows={4} />
            </div>
            <div className="pub-info">文章底部</div>
        </div>
    )
}
