import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://www.filestackapi.com/api',
    timeout: 10000
})

export const uploadFile = (file) => {
    return httpClient.post('/store/S3', file, {
        params: {
            'key': 'APFLQ1mpbTvSRtotiv1SFz'
        }
    })
    .then(res => {
        return res.data
    })
}