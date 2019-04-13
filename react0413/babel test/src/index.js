// ES6

import {funcB} from './second'
funcB();


/**
 * var 함수단위 스코프
 * let, const 블록단위 스코프
 */

// let const
var name = 'ingyu';

let age = 21;
age = 32;
const level = 20; // 수정 불가. 수정 안하는 값은 const 쓰고 아니면 let
//level = 21; // error

// arrow function
// function funcA (){

// }

const funcA = ()=>{}

// setTimeout(function(){

// },2000);

// setTimeout(()=>{

// },2000);

// class

// function Person(name){
//     this.name = name;
// }

class Person{
    constructor(name){
        this.name = name;
    }

    say(){

    }
}

// var jack = new Person('jack');

// spread

// var obj = {name:'abc', age:20};

// var name = obj.name;
// var age = obj.age;

// let{name,age} = obj;