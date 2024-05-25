import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
//添加拦截器
const httpInterceptor = {
  //拦截器前触发
  invoke(options: UniApp.RequestOptions) {
    //1.拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //2.请求超时
    options.timeout = 10000

    //3.小程序请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //4.添加token请求头标识
    const memberStroe = useMemberStore()
    const token = memberStroe.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
