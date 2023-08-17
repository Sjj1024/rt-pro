import requests from '@/utils/http'

export default {
    uploadLog(data: object) {
        return requests({
            url: '/log/upload',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data,
        })
    },
    getLog(params: object) {
        return requests({
            url: '/log/query',
            method: 'get',
            params,
        })
    },
    queryLog(data: object) {
        return requests({
            url: '/log/query',
            method: 'post',
            data,
        })
    },
}
