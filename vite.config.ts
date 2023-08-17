import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        // 配置自己电脑打开的地址
        host: '0.0.0.0',
        proxy: {
            '/log': {
                target: 'http://172.20.10.3:8091',
                ws: false,
                changeOrigin: true,
            },
        },
    },
})
