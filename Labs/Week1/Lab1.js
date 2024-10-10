console.log('Hello,');
console.log('Hello,');
var obj = {
        name: 'Hellu',
        age: 12
}

console.log(obj);

let student = {
        name: 'me',
        age: 26,
        isAdmin: false,
        courses: ['html','css','js'],
        wife: null,
        result: ''
};

console.log("-------");
console.log(student.name);
console.log(typeof(student.name));
console.log(student.age);
console.log(typeof(student.age));
console.log(typeof(student.isAdmin));
console.log(typeof(student.courses));

console.log(typeof(student.wife));
console.log(typeof(student.result));
console.log(typeof(student));
console.log("-------");

function sayHello(){
    console.log('Hello,');
}

sayHello();
console.log(typeof(sayHello))


//Arrow Function

var greet = () => {
    console.log('hello,')
}

const name = "Pritesh Patel"
console.log(name);
console.log(name.length);

