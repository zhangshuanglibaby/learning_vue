// 这个文件进行axios操作的封装
// 1.引入axios
import axios from 'axios'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8000'

export const delCateById = (params) => {
//   return axios.get('/delCateById', { params: { id: 28 } })
  return axios({
    url: '/delCateById',
    params
  })
}

export const getAllCate = () => {
//   return axios.get('/getAllCate')
  return axios({
    url: '/getAllCate'
  })
}

export const addCate = (data) => {
  return axios({
    method: 'post',
    url: '/addCate',
    data
  })
}
