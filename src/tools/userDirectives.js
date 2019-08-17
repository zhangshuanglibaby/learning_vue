// 封装了该项目所用到的自定义指令

export const myfocus = {
  inserted (el) {
    el.focus()
  }
}

export const mycolor = {
  inserted (el, binding) {
    el.style.color = binding.value
  }
}
