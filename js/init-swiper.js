/*
!function () {
  var view = document.querySelector('#mySlides')
  var controller = function (view) {
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }
  controller.call(null,view)
}.call()
*/

!function () {
  var view = document.querySelector('#mySlides')
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init: function () {
      this.view = view
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(
        this.view.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  }

  controller.init(view)
}.call()