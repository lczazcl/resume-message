!function () {
  /*
  var person = window.person = {
    name:'frank',
    age:18
  }
  */

  /*
  // 闭包，只能调用暴漏出来的 frankGrowUp 方法
  var person = {
    name:'frank',
    age:18
  }
  window.frankGrowUp = function(){
    person.age += 1
    return person.age
  }
  */
}.call()