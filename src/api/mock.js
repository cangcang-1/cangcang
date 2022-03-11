import Mock from 'mockjs'
import homeApi from './mockServerData/home.js'
import userApi from './mockServerData/user.js'

Mock.mock('home/getData', homeApi.getStatisticalData)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
