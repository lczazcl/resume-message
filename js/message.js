var APP_ID = 'ikqxOmDik5kASzeC2UbL1L38-gzGzoHsz';
var APP_KEY = 'tCJRprrSgtbkWLj7JbWWBsRe';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

var query = new AV.Query('Message');
query.find()
  .then(
    function (messages) { // messages -> 一个数组
      console.log(messages)
      let array = messages.map((item) => item.attributes)
      console.log(array)
      array.forEach((item) => {
        let messageList = document.querySelector('#messageList')
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        messageList.appendChild(li)
      })
    }
  )

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
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
})


/*
// 创建 表 , 括号内为 表 名称
var X = AV.Object.extend('LCZ2');

// 在表中创建一行数据
var o = new X();

// 数据内容是 words: 'Hello World!' 保存
// 如果保存成功，则运行 alert('LeanCloud Rocks!');
o.save({
  xxxxxxxx: 'Fuck World!'
}).then(function() {
  alert('LeanCloud Rocks!');
  console.log(arguments[0])
})
*/