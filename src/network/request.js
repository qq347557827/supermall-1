import axios from 'axios'

export function request(config) {

  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //2.使用拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  },err => {
    // console.log(err);
  })

  instance.interceptors.response.use(response => {
    // console.log(response);

    return response.data
  },err => {
    console.log(err);
  })

  //发送真正的网络请求 axios本身就是返回一个promise
  return instance(config)
}

// export function request(config) {


//   return new Promise((resolve, reject) => {
//     //创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })

//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// export function request(config, success, failure) {

//   //创建axios的实例
//   const instance1 = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })

//   //发送真正的网络请求
//   instance1(config)
//     .then(res => {
//       console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }
