!function () {
  var view = document.querySelector('section.message')

  var controller = {
    view: null,
    messageList: null,
    init: function (view) {
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    initAV: function () {
      var APP_ID = 'ikqxOmDik5kASzeC2UbL1L38-gzGzoHsz'
      var APP_KEY = 'tCJRprrSgtbkWLj7JbWWBsRe'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    loadMessages: function () {
      var query = new AV.Query('Message');
      query.find()
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
      this.form.addEventListener('submit', function (e) {
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
      message.save({
        'name': name,
        'content': content
      }).then(function (object) { // object -> 
        let messageList = document.querySelector('#messageList')
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        messageList.appendChild(li)
      })
    }
  }
  
  controller.init(view)

}.call()