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
<script type="text/javascript" async src="example1.js"></script> <script type="text/javascript" async src="example2.js"></script>
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

## 0x04 变量 作用域和内存问题

## 0x05 引用类型

## 0x06 面向对象的程序设计

## 0x07 函数式表达



