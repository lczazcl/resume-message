!function () {
  var view = document.querySelector('section.message')

  var model = {
    init: function () {
      var APP_ID = 'ikqxOmDik5kASzeC2UbL1L38-gzGzoHsz'
      var APP_KEY = 'tCJRprrSgtbkWLj7JbWWBsRe'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    // 获取数据
    fetch: function () {
      var query = new AV.Query('Message');
      return query.find() // Promise
    },
    // 创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('Message')
      var message = new Message()
      return message.save({ // Promise
        'name': name,
        'content': content
      })
    }
  }

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      model.fetch()
        .then(
          (messages) => { // messages -> 一个数组
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
              let messageList = document.querySelector('#messageList')
              let li = document.createElement('li')
              li.innerText = `${item.name}:${item.content}`
              this.messageList.appendChild(li)
            })
          }
        )
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      var Message = AV.Object.extend('Message')
      var message = new Message()
      model.save(name, content)
        .then(function (object) { // object -> 
          let messageList = document.querySelector('#messageList')
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}:${object.attributes.content}`
          messageList.appendChild(li)
        })
    }
  }

  controller.init(view, model)

}.call()