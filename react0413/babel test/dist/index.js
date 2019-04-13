"use strict";

require("core-js/modules/es6.function.name");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ES6

/**
 * var 함수단위 스코프
 * let, const 블록단위 스코프
 */
// let const
var name = 'ingyu';
var age = 21;
age = 32;
var level = 20; // 수정 불가. 수정 안하는 값은 const 쓰고 아니면 let
//level = 21; // error
// arrow function
// function funcA (){
// }

var funcA = function funcA() {}; // setTimeout(function(){
// },2000);
// setTimeout(()=>{
// },2000);
// class
// function Person(name){
//     this.name = name;
// }


var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {}
  }]);

  return Person;
}(); // var jack = new Person('jack');
// spread
// var obj = {name:'abc', age:20};
// var name = obj.name;
// var age = obj.age;
// let{name,age} = obj;