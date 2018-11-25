/**
 * 封装ajax请求，向后台请求数据
 * 返回：promise对象，返回promise.data数据
 */
import axios from 'axios'
import qs from 'qs'


let base = '/paas';

//参照教程的,不太会用
/*export default function ajax(url, data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type == 'GET') {
      //准备query请求参数
      let dataStr = '' //数字拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr != null) {
        dataStr = dataStr.lastIndexOf('&')
        url = url + '?' + dataStr
      }
      //像后台发送ajax get请求
      promise = axios.get(url)
    } else {
      //向后台发送post请求
      promise = axios.post(url, data)
    }

    //成功了返回promise中的data数据，失败了返回error信息
    promise.then(function (response) {
      //成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      //失败了调用reject()
      reject(error)
    })
  })

}*/

/**
 * 将form表单的数据发送到后台,一般用于注册或者登录
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
}

// export const postRequest = (url, params) => {
//   let paramsInfo=JSON.stringify(params)
//   return axios({
//     method: 'POST',
//     url: `${base}${url}`,
//     data: paramsInfo,
//     transformRequest:[function (data) {
//       return qs.stringify(data)
//     }],
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   });
// }



export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    data:params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${base}${url}`
  });
}
