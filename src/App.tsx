/* eslint-disable react-refresh/only-export-components */
import { observer } from 'mobx-react-lite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/login'
import NotFound from './views/notFound'
import MainBoard from './views/board'
import Article from './views/article'
import Publish from './views/publish'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Routes>
          <Route path="index.html" index element={<MainBoard></MainBoard>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="article" element={<Article></Article>}></Route>
          <Route path="publish" element={<Publish></Publish>}></Route>
          {/* 404组件 */}
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default observer(App)
