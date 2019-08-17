// 封装了该项目所使用到的过滤器

export const timeFormat = (time, sep1, sep2) => {
  let Y = time.getFullYear()
  let M = time.getMonth() + 1
  let D = time.getDate()
  let h = time.getHours()
  let m = time.getMinutes()
  let s = time.getSeconds()
  return Y + sep1 + M + sep1 + D + ' ' + h + sep2 + m + sep2 + s
}
