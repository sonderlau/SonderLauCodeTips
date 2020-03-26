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

---

## 0x02 Selectors

html对class中的类的顺序 不敏感 但是CSS则是对从上到下的顺序十分敏感

> 事实上 浏览器不一定总会对网页检查是否 **只有一个标签使用了唯一一个ID**
>
> 但不建议用多个 因为`JavaScript`中 `getElementById` 所期望的返回值是唯一的

### 属性选择符

```css
img[alt]{
    
}
```

```css
a[alt][href="www.nice"]{
    
}
```

**需要精确匹配** 即便是class属性 也必须顺序一致

| 形式             | 说明                      |
| ---------------- | ------------------------- |
| `[nice|="haha"]` | `haha` or `haha-`开头的   |
| `[nice~="fafa"]` | 以空格分组的 且包含`fafa` |
| `[nice*="lala"]` | 包含`lala`字符串          |
| `[nice^="jaja"]` | `jaja`开头的              |
| `[nice$="papa"]` | `papa`结尾的              |

如果在括号结束之前加入`i` 匹配时便会忽略大小写 **仅仅是值忽略 属性值仍然有大小写**

当然 HTML 这种不区分大小写的语言便不用在意这个问题

### 根据文档结构选择

#### 后代选择器

```css
h1 em{
    
}
```

注意选择对象: 选择的是 `h1`里面的`em` 元素

#### 子代选择器

```css
p > a{
    
}
```

注意选择对象: 选择的是 `p`的直接子代`a` 元素

#### 紧邻同胞

```css
h1 + p{
    
}
```

注意选择对象: 选择的是 `h1` 紧挨着的 `p` 元素

#### 后续同胞

```css
h1 ~ p{
    
}
```

注意选择对象: 选择的是 `h1`相同父元素的`p` 元素

不一定是紧邻 但是的话也会匹配

### 伪类选择器

 伪类是可以拼接的

```css
a:link:hover {}
```

#### 空元素

`:empty` 

注释也算是空的内容

#### 唯一子元素

`:only-child`

当前元素是他父元素的唯一子元素

#### 唯一类型

`:only-type`

当前元素是他父元素的唯一一种类型的元素

#### 第一个 最后一 个子代

`:first-child`

`:last-child`

如果两个结合在一起用 `:first-child:last-child` 效果等同于 `:only-child`

#### 第一个 最后一 种类型的元素

`:first-of-type`

`:last-of-type`

类似的 如果两个一起用 也是等同于 `:only-type`

#### 每第 n 个元素

`:nth-child()`

代数式也可 

```css
p:nth-child(2n-1){}
```

##### 奇偶个

```css
p:nth-child(even){}
p:nth-child(odd){}
```

#### 倒数每第 n 个

`:nth-last-child()`

#### 每第 n 种元素

`:nth-of-type()`

#### 倒数每第 n 种元素

`:nth-last-of-type()`

#### 动态伪类

##### 超链接伪类

| 伪类       | 描述                                |
| ---------- | ----------------------------------- |
| `:link`    | 有`href`属性的超链接 且**未访问过** |
| `:visited` | 已访问过的链接                      |

事实上 `:link` 也会应用到已访问过的链接上 但会被`:visited` 替代

##### 用户操作伪类

| 伪类      | 描述               |
| --------- | ------------------ |
| `:focus`  | 获得输入焦点的元素 |
| `:hover`  | 鼠标放置其上的元素 |
| `:active` | 输入激活的元素     |

对于`:active` 用户按下`a`元素的那段时间 也会符合

以上 5 种伪类的推荐顺序为 `link-visited-focus-hover-active` 即$l-v-f-h-a$

##### UI 状态伪类

| 伪类             | 描述                                   |
| ---------------- | -------------------------------------- |
| `:enabled`       | 启用的 即接受输入的                    |
| `:disabled`      | 不启用的 即不接受输入的                |
| `:checked`       | 选中的单选按钮或者复选框               |
| `:indeterminate` | 未选中 也没未选中 只能由`DOM` 脚本决定 |
| `:default`       | 默认选中的单选按钮或者复选框等         |
| `:valid`         | 满足数据有效性的输入框                 |
| `:invalid`       | 不满足所有数据有效性的输入框           |
| `:in-range`      | 输入值在最小值和最大值之内的输入框     |
| `:out-range`     | 输入值在范围之外的                     |
| `:required`      | 必须输入的输入框                       |
| `:optional`      | 无需一定输入的输入框                   |
| `:read-write`    | 可编辑的输入框                         |
| `:read-only`     | 不能由用户编辑的输入框                 |

###### :target



#### :lang() 伪类

只要元素有`lang`这个属性 就可以

`:[lang|="fr"]` 则必须要有`lang` 属性标记的元素才可



#### :not() 否定伪类

```css
.moreinfo:not(li){}
```



### 伪元素

**所有伪元素只能出现的选择符的最后**

#### 首字母

`::first-letter`

可以使用的属性

> 所有字体属性 背景属性 文本装饰属性 行内排版 行内布局  边框
>
> `box-shadow` `color` `opacity`

#### 首行

`::first-line`

可以使用的属性

> 所有字体属性 背景属性 外边距 内边距 文本装饰属性 行内排版  边框
>
> 

以上2个伪元素只能用于 **块级元素**

#### 装饰\创建 前置\后置内容元素

`::before`

`::after`

```css
h2::before{
    content: "Nice";
    color: silver;
}
```

