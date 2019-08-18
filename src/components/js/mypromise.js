// 读取data里面的数据
// 异步操作的执行顺序不依赖于异步操作的书写顺序
const fs = require('fs')

// 这样子写嵌套了很多个
// fs.readFile('../data/1.text', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     fs.readFile('../data/2.text', 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log(data)
//         fs.readFile('../data/3.text', 'utf-8', (err, data) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log(data)
//           }
//         })
//       }
//     })
//   }
// })

// 使用promise构造函数

// 1.promise构造函数需要传入一个参数,这个参数是一个函数
// 2.这个函数参数又有两个参数  ,这两个参数是两个回调函数
// 一个是操作成功的回调
// 一个是操作失败的回调
// 封装读取文件的方法
function createPromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(`../data/${fileName}`, 'utf-8', (err, data) => {
      if (err) {
        // 调用失败的回调
        reject(err)
      } else {
        // 调用成功的回调
        resolve(data)
      }
    })
  })
}

let p1 = createPromise('1.text')
let p2 = createPromise('2.text')
let p3 = createPromise('3.text')

// let p2 = new Promise((resolve, reject) => {
//   fs.readFile('../data/2.text', 'utf-8', (err, data) => {
//     if (err) {
//       // 调用失败的回调
//       reject(err)
//     } else {
//       // 调用成功的回调
//       resolve(data)
//     }
//   })
// })

// let p3 = new Promise((resolve, reject) => {
//   fs.readFile('../data/3.text', 'utf-8', (err, data) => {
//     if (err) {
//       // 调用失败的回调
//       reject(err)
//     } else {
//       // 调用成功的回调
//       resolve(data)
//     }
//   })
// })

// 调用promise对象,通过.then  .catch进行调用
p1
  .then(res => {
    console.log(res)
    return p2
  })
  .then(res => {
    console.log(res)
    return p3
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
