!function () {
  //找到特殊标签 ， 添加offset类
  var specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  findClosestAndRemoveOffset()

  window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset()
  })

  function findClosestAndRemoveOffset() {
    //找到特殊标签中离窗口顶部最近的元素
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    /*
    for (let i = 0; i < specialTags.length; i++) {
      specialTags[i].classList.remove('active')
    }
    specialTags[minIndex].classList.add('active')
    */

    //通过上面的标签的id获取到nav中对应href的a标签
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }

  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (ev) {
      ev.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (ev) {
      ev.currentTarget.classList.remove('active')
    }
  }
}.call()