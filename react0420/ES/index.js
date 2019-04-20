var a = {
    name : "jack",
    say : function(){
        console.log('Hi my name is '+this.name)
    }
}


function Person(name){
    this.name = name;
    this.say = function(){
        console.log('Hi my name is '+this.name)
    }
}

var b = new Person('jack');


function Person(name){
    this.name = name;
}

Person.prototype.say = function(){
    console.log('Hi my name is '+this.name);
} // prototype에 say메서드 정의함 그래서 say인식가능


// 객체안의 속성들을 참조하기 위해 상속시키기
// 상속될자식.prototype.__proto__ = 상속시킬부모.prototype;

// ES6 에서는 이런 과정 필요 없고
class Robot{
    constructor(id){
        this.id = id;
    }
    
    say(){
        console.log("Hi my name is "+this.id);
    }
}

class FlyingRobot extends Robot{
    constructor(id){
        super(id);
    }

    fly(){
        console.log("fly")
    }
}

let fr = new FlyingRobot(3);
fr.fly();
fr.say();