// //CALL
// var obj = {num : 2}

// function add(a, b, c){
//     return this.num + a + b + c;
// }

// console.log(add.call(obj, 1, 2, 3))

// //APPLY
// var arr = [1, 2, 3]

// console.log(add.apply(obj, arr))

// //BOUND
// var bound = add.bind(obj);
// console.log(bound(1, 2, 3));

// //exercise
// var age = {age : 20}

// function showAge(){
//     console.log(`This Student age is ${this.age}`)
// }

// showAge.bind(age)();

// //CURRYING BY BIND
// let multiply = function(x, y){
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3)

// let multiplyByThree = multiply.bind(this, 3)
// multiplyByThree(5)

//CURRYING BY CLOSURES
let add = function(x){
    return function(y){
        console.log(x+y)
    }
}

let addByTwo = add(2)
addByTwo(3)

let addByThree = add(3)
addByThree(3)
