import axios from 'axios'

export const getMenu = param => {
  return axios({
    method: 'post',
    url: '/permission/getMenu',
    data: param
  })
}
export const getData = () => {
  return axios({
    url: '/home/getData',
    method: 'get'
  })
}

export const getUser = params => {
  return axios.request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}
