# Javascript高级程序设计语言 笔记

---

## 0x00 写在前面

在开始写笔记的时候 第四版已经出版了 而且已经在翻译了

等第四版出来了 会更新的补充这个笔记的

---

## 0x01 JavaScript 简介

### JavaScript 实现

一个完整的 JavaScript 实现应该由下列三个不同的部分实现

- 核心 ECMAScript
- 文档对象模型 DOM
  - 提供访问和操作网页内容的方法和接口
- 浏览器对象模型 BOM
  - 提供与浏览器交互的方法和接口

![image-20200329205149042](Javascript高级程序设计语言Ver3_images/image-20200329205149042.png)

## 0x02 在HTML中使用JavaScript

### `<script>`元素

- `async` 
  - 可选 表示立即下载脚本 但不应妨碍页面中的其他操作
  - **只对外部脚本有效**
- `charset`
  - 可选 表示通过 src 属性指定的代码的字符集
  - 由于大多数浏览器会忽略它的值 因此这个属性很少有人用
- `defer`
  - 可选 表示脚本可以延迟到文档完全被解析和显示之后再执行
  - 只对外部脚本文件有效
- `src`
  - 可选 表示包含要执行代码的外部文件
- `type` 可选 表示编写代码使用的脚本语言的内容类型 亦称`MIME`类型
  - 默认都是 `text/javascript`

只要不存在 defer 和 async 属性

浏览器都会按照`<script>`元素在页面中出现的先后顺序对它们依次进行解析

### 标签的位置

传统一般放在`<head>`元素中

在文档的`<head>`元素中包含所有 JavaScript文件

意味着必须等到全部 JavaScript代码都被下载  解析和执行完成以后 才能开始呈现页面的内容

现在一般都放在`<body>`元素页面内容的后面

#### 延迟脚本

`defer`属性 表明脚本在执行时不会影响页面的构造

```html
<script defer="defer" type="text/javascript" src="eg.js"></script>
```

相当于告诉浏览器立即下载 但延迟执行

这两个脚本会先于 `DOMContentLoaded`事件执行

在现实当中 延迟脚本并不一定会按照顺序执行

也不一定会在 `DOMContentLoaded` 事件触发 前执行 因此最好**只包含一个延迟脚本**

在`HTML5`中只支持外部脚本



#### 异步脚本

```html
<script type="text/javascript" async src="example1.js"></script> 
<script type="text/javascript" async src="example2.js"></script>
```

在以上代码中 第二个脚本文件可能会在第一个脚本文件之前执行

因此，确保两者之间**互不依赖**非常重要

指定 async 属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容

异步脚本不要在加载期间修改DOM

异步脚本一定会在页面的 `load` 事件前执行

但可能会在 `DOMContentLoaded` 事件触发之前或之后执行

### 外部脚本

引入外部脚本有很多好处

- 可维护性
- 可缓存
- 适应未来



### `<noscript>` 元素

- 浏览器不支持脚本
- 支持脚本 但是脚本被禁用

符号以上任何一个条件 就会显示该标签内的内容





## 0x03 基本概念

### 语法

- **区分大小写**

- 变量开头 必须是 **字母 下划线 美刀符号**

- 注释

  - ```javascript
    // Single line
    /*
     *  Multiline
     */ 
    ```

- 严格模式

  - ES6中默认开启

- 使用分号作为结束标志

- 关键字 和 保留字



### 数据类型

基本数据类型

`Undefined Null Boolean Number String`

复杂数据类型 `Object`　：本质上是由一组无序的名值对组成的

#### typeof

检测变量的类型

```javascript
alert (typeof null); // object
```

#### undefined 类型

```javascript
var message;
message; // undefined
var demo = undefined; // 显式声明
```

#### null 类型

实际上 `undefined`是`null`的衍生值

```javascript
null == undefined; // true
```

#### Boolean 类型

只有`true`和`false` 注意大小写

可以调用`Boolean()`对其他值进行强制转换

| 数据类型  | 转换为`true`的值     | 转换为`false`的值 |
| --------- | -------------------- | ----------------- |
| Boolean   | `true`               | `false`           |
| String    | 非空字符串           | 空字符串          |
| Number    | 非0数字值 包括无穷大 | 0和`NaN`          |
| Object    | 任何对象             | `null`            |
| Undefined | -                    | `undefined`       |

#### Number 类型

代码比较易懂

```javascript
var intNum = 6;
var octalNum = 070;
var hexNum = 0xA;
var floatNum = 1.1;
var floatENum = 3.125e7;
```

由于使用`IEEE754`进行数值计算 对浮点数的精度会有影响

```javascript
if (0.1 + 0.2 === 0.3){ // 永远不相等
}
// 0.1 + 0.2 的结果是 0.30000000000000004
```

由于内存限制 数值的大小是有界限的

`Number.MAX_VALUE` `Number_MIN_VALUE` 值是 `1.7976931348623157e+308`

如果超过了这个上限 值将会被认为是 `Infinity` 如果是负数 `-Infinity`

这个值将无法参与后续的运算

```javascript
isFinite(num);
// 可以检测是不是这两种类型的数值
```

如果在数字运算中 本来应该返回数字的运算有问题 那么就会返回`NaN` 即 Not a Number

如0除以0 

[^真实情况]:只有0除以0才是`NaN` 正数除以0返回 `Infinity` 负数除以0返回`-Infinity`

任何数与`NaN`进行运算 得到的也是`NaN`

```javascript
NaN === NaN ; // false
isNaN(NaN); // true
isNaN("10"); // false : "10" --> 10
isNaN("Blue"); // true
isNaN(true); // false : true --> 1
```

[^isNaN]:调用该方法的时候 会先调用对象的`valueOf()` 确定是否可以转换为数值 如果不行 继续调用`toString()`方法

##### 数值转换

`Number()` 可以对任何值使用

- Boolean
  - 1或 0
- 数字值
- `null`
  - 返回0
- `undefined`
  - `NaN`
- 字符串
  - 只包含数字 包括正负号 转换成十进制
  - 浮点数格式 转换成浮点数
  - 十六进制数 转换成相同大小的十进制
  - 空
    - 0
  - 其他字符
    - `NaN`
- 对象
  - `valueOf()` 再按照规则进行考虑 若`NaN`
  - `toString()` 进行考虑

`parseInt()`

- 忽略字符串前面的空格 直到找到第一个数字字符或者负号
- 如果不是 返回`NaN`
- 忽略小数点 因为不是`int`

一般会用两个参数 用来指定进制

```javascript
var num = parseInt("0xAF", 16);
```

`parseFloat()` 同理



#### String 类型

使用单引号或者双引号括起来

```javascript
var firstName = "Sonder";
var lastName = 'Lau';
```



#####  字符串面量

| 字面量  | 含义        |
| ------- | ----------- |
| `\n`    | 换行        |
| `\t`    | 制表符      |
| `\b`    | 空格        |
| `\r`    | 回车        |
| `\f`    | 进纸 (?)    |
| `\\`    | 即 \        |
| `\'`    | 单引号      |
| `\"`    | 双引号      |
| `\xnn`  | 十六进制    |
| `\unnn` | Unicode字符 |



##### length

任何字符串都有一个`length`值 用来储存长度

```javascript
var text ="SonderLau";
text.length; // 9
```



#####  拼接

```javascript
var lang = "java";
lang = lang + "Script";
```

通过 `+` 对字符串进行拼接



#####  转换为字符串

- `toString()`
  - 几乎所有的值都可以这样
  - **`null` `undefined`值没有这个方法** 
  - 可以加入参数 代表指定进制
- `String()`
  - 如果该值有`toString()` 则调用该方法
  - 如果是`null` 返回`null`
  - 如果是`undefined` 返回`undefined`



#### Obejcet 类型

```javascript
var obj = new Object();
```

类似`Java`

每个`Object`都有以下的属性和方法

- `constructor` 构造函数
- `hasOwnProperty (propertyName)` 检查属性是否在当前的实例中 参数必须以字符串形式
- `isPrototypeOf (obejct)`检查传入的对象是否是传入对象的**原型**
- `propertyIsEnumerable (propertyName)` 用于检查给定的参数能否进行`for-in`枚举 同样参数需要字符串
- `toLocaleString ()` 返回对象的字符串表示 与执行环境的地区对应
- `toString()` 返回字符串表示
- `valueOf ()` 回对象的字符串 数值或布尔值表示



### 操作符

```javascript
var age = 18;
age++;
age--;

var string1 = "01";
var string2 = "1.1";

string1 = +string1; // 1
string2 = +string2; // 1.1
```



#### 位操作符

1. 按位非 NOT  `~`

2. 按位与 AND `&`

3. 按位或 OR `|`

4.  按位异或 `^`

5. 左移 `<<`

6. 有符号的右移 `>>`

7. 无符号的右移 `>>>`



#### 布尔操作符

`! && ||`



#### 相等操作符

`== 和 ===` 的不同 : 需要比较两个变量的类型



#### 条件操作符

```javascript
variable = boolea_experssion ? true_value : false_value;
```



#### 赋值操作符

```javascript
var num1 = 1, num2 = 2, num3 = 3;
var num = (5,2,1,0); // num : 0
```



### 语句

```javascript
if (condition){
    // statement 1
} else if (condition 2){
    // statement 2
} else {
    // statement 3
}
```



```javascript
do {
    // statement
} while (experssion);
```



```javascript
while (experssion) {
    // statement
}
```



```javascript
for (var i = 0 ; i < 5 ; i ++) {
    // statements
}
for (var property in windows){
    // statements
}
```



```javascript
var num = 0; 

outermost:
for (var i=0; i < 10; i++) { 
    for (var j=0; j < 10; j++) { 
        if (i == 5 && j == 5) {
        	break outermost;
		} 
        num++; 
	} 
} 
alert(num); //55
```



```javascript
with (experssion) {
    // statements
}
```

`with` 为了简化多次编写同一个对象的工作 但是不推荐使用 会降低性能



```javascript
switch (experssion) {
    case value: // statements
        break;
    default : // statements
}
```



### 函数

```javascript
function functionName (arg0, arg1, ... argN) {
    // statements
}
```

需要注意的是

- 不能把函数命名为 `eval` 或 `arguments`
- 不能把参数命名为 `eval` 或 `arguments`
- 不能出现两个命名参数同名的情况



所有的参数会被包装成一个 `arguments` 对象

**函数在JS中没有重载 Overload**



## 0x04 变量 作用域和内存问题

## 0x05 引用类型

## 0x06 面向对象的程序设计

## 0x07 函数式表达



