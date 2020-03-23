function squareSum(a, b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b)
}

console.log(squareSum(2,3));

function person(){
    let name = "Nice";
    function getName(){
        return name;
    }
    return getName;
}


// TODO:我吐了 这个函数
// Curry Function
function addThreeNumsCurry(a){
    return function(b){
        return function(c) {
            return a+b+c;
        }
    };
}


// Self - Execute function
let num1 = 10;
(
    function (){
        let num1 = 20;
        console.log(num1);
    }
)();

// Call back function
function request(cb){
    console.log("Requring Data");
    cb();
    console.log("Requests Finished");
}
// function callback() {
//     console.log("Processing Callback");
// }
request(result => {
    console.log("Go!!");
});
//* 即传入 函数作为参数
result();
console.clear();
//================================

// Array
let arr = [1,2,3,4,5,6];
arr.splice(2,1);
console.log(arr);
arr.splice(2,0,2,3,5,6);
console.clear();

for (let i = 0 ; i <arr.length;i++){
    console.log(arr[i]);
}

console.log("For ..... of");

for (let ele of arr){
    console.log(ele)
}

// arr.forEach(ele, index, self)=> {
//     console.log(ele, index, self)
// }

console.clear();


let stack = [1,2,3];
stack.push(4);
console.log(stack);

let last = stack.pop();
console.log(last);
console.log(stack);

console.log(stack[stack.length-1]);

// Queue
console.clear();
//* 移除头部
stack.shift();
//* 添加头部
stack.unshift(10,11,12);

console.clear();

// Reverse Array
let array= [1,2,3,4,5];
console.log(arr.reverse());

console.log(arr);

console.log("hello".split("").reverse().join(""));

// o l l e h

console.clear();

let arrySort = [1,3,5,6];
arrySort.sort();

arrySort.sort((a, b) => {
    if(a > b){
        return -1;
    }else if (a < b){
        return 1;
    }else{
        return 0;
    }
});

console.log(arr);

console.clear();

// TODO: https://www.bilibili.com/video/av87847392?p=49

// Array Link
let arrayLink1  = [1,2,3];
let arrayLink2 = [4,6,5];
console.log(arrayLink2.concat(arrayLink1));
// Array Cut
let arrayCut = [1,2,3,4,5,6];
console.log(arrayCut.slice(1,3));
//* 类似python的切片
//* arrayCut is [2,3]
arrayCut = [1,2,3,4,5,6];
console.log(arrayCut.slice(1,-1));

console.clear();

// Map Array
let arrayMap = [1,2,3,4,5];
let mapped = arrayMap.map(ele => ele *2);
console.log(arrayMap);
console.log(mapped);

console.clear();

// Reduce
let reduce = [1,2,3,4,5];
let reducedArray = reduce.reduce((previous, current) => previous + current, 0);
console.log(reducedArray);

console.clear();
// filter
let filter = [1,2,3,4,5.6];
let filteredArray = filter.filter(item => item > 4);
console.log(filteredArray);

console.clear();

// Array Test
let needToTest = [1,2,3,4,5,6];
let testedArray = needToTest.every(item => item >2);
console.log(testedArray);

let resultSome = needToTest.some(item => item > 5);
console.log(resultSome);

console.clear();


// Destructuring Array
let desArray = [1,2,3];
let [a,b,c] = desArray;
console.log(a,b,c);

let [d,e] = desArray;
console.log(d,e);

let [,f] = desArray;
console.log(f);

function multipleReturns() {
    let name ="Dp";
    let position = "Noob";

    return[name,position];
}
let [myName, myPosition] = multipleReturns();
console.log(myName,myPosition);

console.clear();

// Rest Array
let restArray = [1,2,3,4,5,6,7,8,9];
let [a,b, ...rest] = restArray;
console.log(a,b,rest);

let [first,,third, ...restSecond] = restArray;
console.log(first,third,restSecond);

function variousArgs (...args){
    console.log(args);

}
variousArgs(1,2,3,4);


// Multidimensional Arrays
let multiArray = [];
for (let i = 0 ; i< 4 ; i++){
    multiArray[i] = [];
    for (let j = 0 ; j < 5 ; j++){
        multiArray[i][j] = i+j;
    }
}


// Create Object
let employee = {
    name: "张三",
    age : 20,
    position : "帅啊",
    signIn: function () {
        console.log("张三帅");

    }
};

let employeeNo2 = {};
// = new Object()
employeeNo2.name =  "哈哈哈";



// Object Attributes
console.log(employee.age);
console.log(employee["name"]);

employee.name = "大炮";
console.log(employee.name);
employee["name"] = "大炮刘";
console.log(employee.name);

console.clear();

// Omit Key
let man = {
    name,
    move(){

    }
};


// Pass Object Attributes
console.log(Object.keys(employee));
for (key in employee){
    console.log(key);
}

// Remove Attributes
delete employee.name;


// Construct Function
function person(naem, position){
    this.name = naem;
    this.position = position;
}

let p1 = new person("大炮","Dev");
let p2 = new person("小炮","Dev");


console.clear();
// this
let p3 = {
    name : "大炮",
    sign(){
        console.log(this.name + "上班");
    }
};

p3.goToWork = () => {
    console.log(this.name + "上班");
    // 箭头函数指向作用域
    console.log(this);

};

function thisPerson(name , position){
    this.name = name;
    this.position = position;
    this.sign = () => {
        console.log(this.name + "GO");
    }
}

console.clear();


// Getter Setter
let bigMan = {
    firstName : "跑",
    lastName : "刘",
    get fullName(){
        return this.lastName + this.firstName;
    },
    set fullName(fullName){
        let [firstName,lastName]  = fullName.split(",");
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

function bigMen(name , position) {
    this.name = name;
    this.position = position;
}
let oneMan = new bigMen("赵四","划水");
Object.defineProperty(oneMan, "info",{
   get: function () {
        return this.name + " " + this.position;
   },
   set: function (info) {
        let [name, position] = info.split(",");
        this.name = name;
        this.position = position;
   }
});

console.log(oneMan.info);

console.clear();


// Prototype
function protoPerson(name, position) {
    this.name =  name;
    this.position = position;
    this.signIn = function () {
        console.log(this.name + "打卡");
    }
}

let protoP1 = new protoPerson("1","1");
let protoP2 = new protoPerson("2","2");

console.log(protoP1, protoP2);

protoPerson.prototype.age = 20;

protoPerson.prototype.printInfo = function () {
    console.log(this.name , this.age , this.position);
};

console.log(protoP1.__proto__);
console.log(protoP1.__proto__ === protoPerson.prototype);
console.log(Object.getPrototypeOf(protoP2));

console.clear();


// Object Create
for (key in protoP1){
    console.log(key);
}

let manager = Object.create(protoP1);
console.log(manager);

for (let key in manager){
    console.log(manager);
}
console.log(manager.name);
manager.name = "经理";
manager.position = "CEO";
console.log(manager);
manager.signIn();
console.log(Object.getOwnPropertyNames(manager));

console.clear();

// Prototype Link
let protoOfManager = Object.getPrototypeOf(manager);
console.log(protoOfManager);

let protoOfP1 = Object.getPrototypeOf(protoP1);
console.log(protoOfP1);

let protoOfPerson = Object.getPrototypeOf(protoPerson);
console.log(protoOfPerson);

let protoOfObject = Object.getPrototypeOf(Object);
console.log(protoOfObject);


console.clear();


// Edit prototype link
function CTO () {

}

CTO.prototype.department = "技术部";
Object.setPrototypeOf(manager,CTO.prototype);
console.log(manager.department);

console.clear();


// Spread
let post = {
    id: 1,
    title : "标题啊",
    content : "内容",
    comments : null
};

console.log(post);

let postClone = {... post};
console.log(postClone);
console.log(postClone === post);

let post2 = {
    ...post,
    author : "大炮",

};
console.log(post2);

let spreadArray = [1,2,3];
let spreadArrayClone = [...spreadArray];
console.log(spreadArrayClone);

function savePost(id, title, content){
    console.log("保存 : ", id, title, content)
}
savePost(...[2,"标题","哈哈哈"]);


console.clear();


// Destructing and Rest

let {id, title} = post;
console.log(id, title);
//* 需一致

let  {id, title:headline } = post;
console.log(id, headline);

let {id, title, comments = "没评论"} = post;
console.log(comments);

let [a,b=2] = [1];
console.log(a,b);

let post2 = {
    id : 2,
    title : "标题2",
    comments : [
        {
            userId : 1,
            comments: "评论1"
        },
        {
            userId : 2,
            comment: "评论2"
        },
        {
            userId : 3,
            comments: "评论3"
        }
    ]
};

let {comments: [,{comment}]} =post2;
console.log(comment);

function getId (idKey, obj){
    let {[idKey]: ID} = obj;
    return id;

}

console.log(getId("userId",{userId:3}));

let {comments, ...restPost} = post2;
console.log(restPost);

function savePostObj({id, title, content, ...rest}) {
    console.log("保存了文章: ",id,title,content);
    console.log(rest)
}

savePostObj({id: 4,title :"标题4",content:"内容4"},);

// Attributes transfer
function byReference(array) {
    array[0] = 5;
}
let valueArray = [1,2,3,4,5];
byReference(valueArray);
console.log(valueArray);

function byReferenceObj (obj) {
    obj.title = "蜜汁标题";
}
let referPost = { id: 1, title: "标题"};
byReferenceObj(referPost);
console.log(referPost);

function byReferenceString(str){
    str = "abc";
}

let testString = "test";
byReferenceObj(testString);
console.log(testString);
//* 不会改变


function byValue(num) {
    num = 10;
    console.log(num);
}
let testNum = 1;
byValue(testNum);
console.log(testNum);
//* 发生了改变

console.clear();
// call apply bind


// let emp = {
//     id : 1,
//     name : "大炮",
//     printInfo() {
//         console.log("姓名为 :" + this.name);
//     },
//     department : {
//         printInfo(){
//             console.log("部门名称" + this.name);
//         }
//     }
// };
//
//
//
// emp.printInfo();
// emp.department.printInfo();


let emp = {
    id : 1,
    name : "大炮",
};

function printInfo (dep1, dep2, dep3) {
    console.log("姓名为" + this.name,dep1,dep2,dep3);
}

printInfo();
printInfo.call(emp,"技术部","IT","总裁办公室");
printInfo.apply(emp,["技术部","IT","总裁办公室"]);

console.clear();
let bindedEMP = printInfo.bind(emp,"技术部","IT","总裁办公室");
bindedEMP();


// https://www.bilibili.com/video/av87847392?p=74




// define Class

class Employee {
     constructor(name, position) {
         this.name = name;
         this.position = position;
     }
     signIn(){
         console.log(this.name + "打卡");
     }
     get info(){
         return this.name + " " + this.position;
     }
     set info(info){
         let [name, position] = info.split(" ");
         this.name = name;
         this.position = position;
     }
}

let classEmp = new Employee("大炮","划水");
console.log(classEmp);
classEmp.signIn();
console.log(classEmp.position);

class MangaerCTO extends Employee{
    signIn() {
        //* 调用父类
        super.signIn();

        console.log("额外信息 !");
    }
}
let aManager = new MangaerCTO("textName","testPosition");
//* 方法也会继承
console.clear();


// String
let str = "hello!";

let strObject = String("yep");

// Escape Character
let escape = "兄弟啊\"\"";

// Pass string
for (let i = 0; i< str.length ; i++){
    console.log(str.charAt(i));
}

for (let c of str){
    console.log(c);
}

console.clear();

// Cut
let cutString = "this is a long string";

console.log(str.slice(0,4));
str.slice(0,-1);
str.substr(0,4);

let string1 = "hi";
let string2 = "nice!";
console.log(string1.concat(str2));
string1.toUpperCase();
string1.toLowerCase();

string1.trim();

console.clear();


let longString = "lorem opaasdufhauowqwejkljaklsdfjklasjdfiqw";

let stringName = "大炮";
let stringGreeting = "你好 ${name}";

console.log(stringGreeting);

function greeting(strings, gender){
    let genderString = "";
    if (gender === "M"){
        genderString = "先生";
    } else if (gender === "F"){
        genderString = "女士";
    }

    return "${strings[0]} ${genderString}";
}


// https://www.bilibili.com/video/av87847392?p=86


// Regular Expression
let regularString = "where when what";

let regular = /wh/g;
let regular2 = new RegExp("wh");

console.log(regular.exec(regularString));
console.log(regular.exec(regularString));
console.log(regular.exec(regularString));

console.log(regular.test(regularString));

console.log(regular2.exec(regularString));
console.log(regular2.test(regularString));


console.clear();
// String match

let stringMatch = "This str contains 123 CAPITALIZED letters and _-&%% symbols";

console.log(/T/.test(stringMatch));

console.clear();


console.clear();

// Special String Match

console.log(stringMatch.match(/Th.s/g));
console.log(stringMatch.match(/\d/g));

console.log(stringMatch.match(/\w/g));
console.log(stringMatch.match(/\s/g));


// Unicode
console.log("你好".match(/\u4f60/g));


console.clear();


// Match Times
console.log(stringMatch.match(/This.*/g));
console.log(stringMatch.match(/t+/g));
console.log(stringMatch.match(/T+/g));

console.log(stringMatch.match(/x?/g));
console.log(stringMatch.match(/t?/g));

console.log(stringMatch.match(/t{2}/g));
console.log(stringMatch.match(/\d{1,2}/g));

console.clear();


// 区间 逻辑 界定符
console.log(stringMatch.match(/[abc]/g));
console.log(stringMatch.match(/[a-z]/g));
console.log(stringMatch.match(/[A-Z]/g));
console.log(stringMatch.match(/[^0-9]/g));
console.log(stringMatch.match(/[\-_&\^]/g));

console.log(stringMatch.match(/This|contains/g));

let stringLogic = "this that this and that";
console.log(stringLogic.match(/^this/g));
console.log(stringLogic.match(/that$/g));


// Group
let stringGroup = "this that this and that";
console.log(/(th).*(th)/.exec(stringGroup));

let stringGroup2 = "aaaab abb cddaa";
console.log(stringGroup2.match(/(aa){2}/g));


// Common Regulars
let mobileNumberReg = /^1[3-9]\d{9}/g;


let emailReg = /^([a-zA-Z0-9_\-.]+)@$([a-zA-Z0-9_\-.]+)\.(a-zA-Z{2,5})$/g;


let userNameReg = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/g;


// String Replace

let stringReplace = "Tish is an apple";
let stringReplaceComplex = "Tish is an apple";
console.log(stringReplace.replace("Tish","This"));
console.log(stringReplaceComplex.replace(/\d+/g,""));

let htmlReplace = "<span>hello</span> <div>world</div>";
console.log(htmlReplace.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, "$1"));


// String Separate
let tags = "html, css, javascript";
console.log(tags.split(","));

let separatedString = "This | is , an & apple";
console.log(separatedString.split(/\W+/g));



// Number
let stringNum = "15";
console.log(Number.parseInt(stringNum));


let stringFloatNum = "12.34";
console.log(parseFloat(stringFloatNum));

let stringNumber = "abc";
console.log(parseInt(stringNumber));


let numFloat = 12.3345667;
console.log(numFloat.toFixed(2));
//* String 类型

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


// Math

console.log(Math.PI);
console.log(Math.abs(-6));
console.log(Math.sin(Math.PI/2));
console.log(Math.floor(3.98));  // 3
console.log(Math.ceil(3.1));    // 4
console.log(Math.pow(10, 3 ));
console.log(Math.trunc(2.685));  // 2
console.log(Math.random());



// Date

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());   // 周几
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getSeconds());
console.log(date.getTime());
//* Get -> Set 即可设置时间
console.log(date.toLocaleDateString());



// JSON

let postJSON = {
    "id":1,
    "title":"标题",
    "comments": [
        {
            "userID":1,
            "comments":"评论1"
        },{
            "userID":2,
            "comments":"评论2"
        }
    ],
    "publish": true,
    "author": null
};

console.log(JSON.parse(postJSON));

let personJSON = {
    id: 1,
    name : "大炮",
    skills: ["吹水","扯淡"]
};
console.log(personJSON);
console.log(JSON.stringify(personJSON, null, 2));



// Set
let set = new Set();

set.add(1);
set.add(3);
set.add(5);

console.log(set);

set.add(3);
console.log(set);
// 不能重复

console.log(set.has(4));


set.forEach(value => {
    console.log(value)
});

set.delete(3);

set.clear();

let object1 = {id:1};
let object2 = {id:1};

set.add(object1);
set.add(object2);

// set.add(object1);



// Map
let map = new Map();
map.set(1,"值1");
map.set({key:2}, "值2");
map.set("key 3", "值3");

console.log(map);
console.log(map.get(1));
console.log(map.get({key : 2})); // Cannot find !
console.log(map.get("key 3"));

console.log(map.has("nice"));

map.forEach((value,key)=>{
    console.log(key,value)
});

let iterator = map.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//* done :true


for (let [key,value] of map){
    console.log(key,value);
}


map.delete(1);



// Exception

try{
    let empException = undefined;
    console.log(empException.name);
} catch (error) {
    console.error(error);
} finally {
    console.log("总会执行啊");
}

// Throw


class ApiError extends Error{
    constructor(url, ...params) {
        super(...params);
        this.url = url;
        this.name = "Api Error"

    }
}
function fetchData(){
    console.log("获取数据....");
    throw new ApiError("/post",404);
}


try{
    fetchData();
} catch (e) {
    if (e instanceof ReferenceError){
        console.log("程序异常");
    }else if (e instanceof ApiError){
        console.log("API 异常")
    }

}


// Async
// setTimeOut
console.log("First Line");
let timer1 = setTimeout(() =>{
    console.log("一秒后执行")
},1000);
console.log("Second Line");
//* First -> Second -> 一秒后执行


setTimeout(() =>{
    clearTimeout(timer1);
    console.log("中断了Timer 1 ")
}, 500);


// setInterval
let interval = setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
},1000);

setTimeout( ()=>{
    clearInterval(interval);
}, 5000);




// Promise
let promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        // resolve("执行成功");
        reject("执行失败");
    },2000)
});


// promise.then(value => console.log(value));
promise.catch(error => console.log(error));
console.log("在Promise之前执行");

// out:
//* 在Promise之前执行  执行成功



new Promise((resolve, reject) =>{
    setTimeout( () => {
        resolve(1);
        // reject("Promise 失败");
    },1000);
})
    .then( value => {
    console.log(value);
    throw "Then 1 异常";
    return value + 10;
})
    .then(value => {
    console.log(value);
    return new Promise(resolve => resolve(value + 20))
})
    .then(value => {
    console.log(value);
})
    .catch(error => {
    console.log(error);
});
// 1 11 31


let multiPromise1 = new Promise(resolve => {
    setTimeout(resolve=>{
        resolve(1);
    },1000)
});

let multiPromise2 = new Promise(resolve => {
    setTimeout(resolve=>{
        resolve(2);
    }, 2000)
});

let multiPromise3 = new Promise(resolve => {
    setTimeout(resolve=>{
        resolve(3);
    },500)
});

Promise.all([multiPromise1,multiPromise2,multiPromise3]).then(values => {
    console.log(values);
});
//* 1 2 3


// Async Await
async function async1 () {
    // setTimeout(()=>{
    //     console.log("async 1 执行完毕")
    // },1000)
    let result2 = await async2();
    try {
        let result3 = await async3();
    } catch (error) {
        console.log(error);
    }

    console.log(result2);
    console.log(result3);
}


async function async2 () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        },1000);
    });
}


async function async3 () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve(8)
            reject("执行出错");
        },500);
    });
}
console.log(async1());




















































































































