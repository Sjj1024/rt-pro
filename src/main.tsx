import ReactDOM from 'react-dom/client'
import App from './App'
import '@/style/index.css'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
