!function () {
  var view = document.querySelector('#topNavBar')
  /*
  var controller = function (view) {
    window.addEventListener('scroll', function (ev) {
      if (window.scrollY > 0) {
        view.classList.add('sticky')
      } else {
        view.classList.remove('sticky')
      }
    })
  }
  controller.call(null,view)
  */

  // controller 对 view 的操作全都放在属性名里面
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents() // this -> controller
      // this.bindEvents.call(this)
    },
    bindEvents: function () {
      var view = this.view
      window.addEventListener('scroll', function (ev) {
        if (window.scrollY > 0) {
          //view.classList.add('sticky')
          this.active()
        } else {
          //view.classList.remove('sticky')
          this.deactive()
        }
      }.bind(this))
    },
    active: function () {
      this.view.classList.add('sticky')
    },
    deactive: function () {
      this.view.classList.remove('sticky')
    }
  }
  controller.init(view)
  // controller.init.call(controller,view)

  /*
  window.addEventListener('scroll', function (ev) {
    if (window.scrollY > 0) {
      view.classList.add('sticky')
    } else {
      view.classList.remove('sticky')
    }
  })
  */
}.call()