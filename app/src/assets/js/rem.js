(function (doc, win) {
  const WIDTH = 750 // 拿到的设计图是多宽的，就将值设置为多宽
  const docEl = doc.documentElement// 将html元素获取
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize' // 获取resize事件，如果是在移动端，就使用orientationchange屏幕方向改变时间 ，如果在pc端，使用resize方便开发者进行测试
  const recalc = function () {
    const clientWidth = docEl.clientWidth // 获取到窗口的宽度
    if (!clientWidth) return // 如果没有获取到，直接返回 退出
    if (clientWidth >= WIDTH) { // 判断浏览器宽度是否大于某个值
      docEl.style.fontSize = '100px' // 防止用户使用电脑访问移动端页面时，页面布局不好看
    } else {
      docEl.style.fontSize = 100 * (clientWidth / WIDTH) + 'px'
    }
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', function () {
    doc.body.style.fontSize = '.28rem'
    recalc()
  }, false)
  // doc.addEventListen
}(document, window))

/* var s1 = 'hello',s2 = 'world', n1 = 100
(function (a,b,c) {

}(s1,s2)) */
