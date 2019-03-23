/*
!function () {
  var person = {
    name: 'frank',
    age: 18
  }
  return function () {
    person.age += 1
    return person.age
  }
}.call()
*/

var accessor = function () {
  var person = {
    name: 'frank',
    age: 18
  }
  return function () {
    person.age += 1
    return person.age
  }
}

var growUp = accessor.call()
growUp()
