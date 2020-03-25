# CSS : The Difinitive Guide

---

## 0x00

这本书算是CSS中的标杆书籍了 自己也简简单单的读了一遍

最近做起东西来 发现自己写的时候十分艰难

**Talk is cheap, show me the code**

---

## 0x01 CSS_And_Document

常见的CSS元素类型 : **块级 Block** **行内 Inline**

### 引入

```html
<link rel="stylesheet" type="text/css" href="" media="" title="">
```

若文件不以`.css` 结尾 服务器可能不会当作`css`进行处理 但是修改服务器配置可以解决

#### rel

即 realtion 一般取`stylesheet` 也可取 `alternate stylesheet` 即候选样式表

可通过JS等进行选择

#### media

媒体选择 参考 **TODO**

#### title

对多个CSS进行分组 如果选择了其中一个 那么其他分组的就会被忽略

一般不写值 即 **永久样式表 Persistent Stylesheet**

### \<style>

#### type

同`css` 也应写`text/css`

#### @import

**在style的内部 且在规则内容之前**

多个导入会导致叠加 同时也可选择媒体

```css
@import url(sheet2.css) all;
@import url(sheet3.css) screen;
```

### HTTP 链接

向HTTP协议或者服务器的配置文件内加入内容

这种情况少用 但是会对几乎所有的浏览器生效

### 行内元素

```html
<p style="color: gray;background: yellow">The most wonderful of all breakfast foods is..
</p>
```

不推荐使用

### CSS 结构

```css
/*选择符*/
h1 /*声明块*/{
    /*声明*/
    color : red;
    /*声明: 值*/
    background : yellow;
}
```

### 厂商前缀

| 前缀       | 厂商                        |
| ---------- | --------------------------- |
| `-epub-`   | 国际数字出版论坛 ePub       |
| `-moz-`    | 基于Mozilla (Firefox)       |
| `-o-`      | 基于Oprea                   |
| `-webkit-` | 基于WebKit（Sarari, Chrome) |

### 注释

```css
/*
	多行
	也可
*/
```

### 特性查询

```css
@supports (color : black){
    body{
        codlor : green;
    }
}
```

查询当前浏览器是否支持 否则跳过这个样式块

**这种查询仅仅是看到浏览器是否支持 即浏览器是否已经实现了该样式 但有可能有缺陷**