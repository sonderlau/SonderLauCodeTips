# CSS : The Difinitive Guide

---

## 0x00

这本书算是CSS中的标杆书籍了 以前是简简单单的过了一遍

最近做起东西来 发现自己写的时候十分艰难

好好拿起来重新看 温故知新嘛

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

----

## 0x03 Specificity and Cascade

Key words

> inheritance 继承
>
> specificity 特指度
>
> cascade 层叠



### 特指度的计算

每个选择符都会有自己的特指度 通过计算 CSS能够得知给有冲突的属性选择哪一个

特指度由四个部分组成 `0,0,0,0` 我一般习惯理解为 `0000` 即一个四位数

- 每个**ID**值 增加 `0100`
- 每个雷属性值 属性选择 伪类 增加 `0010`
- 每个元素和伪元素 增加 `0001`
- 连接符 通用选择符 不增加特指度

[^伪类]:CSS 2.1中明确指出 伪元素有特指度

e.g.

```css
h1 + p {color: black; font-style: italic;}  /* 0,0,0,2 */
p {color: gray; background: white; font-style: normal;}  /* 0,0,0,1 */
```

#### 通用选择符

`*` 不增加特指度 即`0000` 但**不是没有特指度**

#### 行内样式

特指度增加`1000` 

#### 重要性

`!important`

注意放的位置

```css
p.dark{color: #333 !important;}
```

特指度是**大于行内样式**的

### 层叠

用户代理 (User Agent) 对于CSS的处理是类似这样的

```css
h1 {color: silver; background: black;}
/*一般会转换成*/
h1 {color: silver;}
h1 {background: black;}
```

```css
h1,h2.section {color: silver;}
/*一般会转换成*/
h1 {color: black;}
h2.section {color: black;}
```

用户代理会确定哪些规则与元素匹配 找出所有的规则 并计算各自的特指度

判断哪些规则会胜出 再应用

这一步 是层叠的重要内容



### 继承

属性值会按照`DOM`节点一般向下传播

[^特例]:`body`的属性值会传给`html`元素

但是很多属性都是不继承的 是为了避免

继承的属性 **无特指度** 没有 $\neq$ 0

[^滥用通配符]:`*`的特指度是`0000` 因此不要滥用 否则会让继承的属性无法显示



#### CSS的层叠规则

1. 找到匹配特定元素的所有规则

2. 按权重排序所有声明 `!important`大于没有这一标记的

   > 基本要考虑五个方面
   >
   > - 读者提供的 `!important`
   > - 创作人员提供的 `!important`
   > - 创作人员的常规声明
   > - 读者的常规声明
   > - 用户代理样式

3. 按来源应用样式 : 创作人员 > 读者 > 用户代理 

4. 按特指度排序 应用

5. 按照声明前后位置 声明靠后的权重高 导入的表在所有声明的最前面



---

## 0x04 Values and Units

### 关键值 字符串

#### 关键字

`none` 与 `0` 不同 它会移除该样式

##### 全局关键字

规范中 每个属性都可以使用 `inhert` `initial` `unset`

###### `inhert`

强制继承父元素的值

###### `initial`

设定为预定义的内容

###### `unset`

是上面两个的合集 会自动选择



##### 特殊属性 `all`

```css
h1 {
    all: inherit;
}
```



`all` 属性只接受上面三个全局关键字

`all` 代指 除了`direction`和`unicode-bidi`之外的所有属性



#### 字符串

```css
"This is the right place \
for a new 'line'"

'This is a better place \A for a \'newline\''
```

换行 转义



### 其他文本值

#### URL

相对路径  绝对路径

```css
@import url(nice.com\hahah.css);
/* url与括号之间不能有空格  */
```

#### 图像 

##### \<url>

指向外部的资源

##### \<image-set>

一系列图像 可以用于多端适配

##### \<gradient>

线性渐变 径向渐变图像



#### 数字 \<number>

一般指实数

部分属性对区间也有要求

如`opacity`要求`0-1` 之间等

##### 整数  \<integer>

用户代理除了特定的属性(如`z-index`)必须接受 $\pm 1073741824 (\pm 2^{30})$的整数

[^Clamping]:取值范围外的整数会被设为与所用值最接近的数字

##### 百分数 \<percentage>

##### 弹性值

是 \<number> 后加 `fr` 用于栅格布局



#### 距离

##### 绝对长度

一般很少用

- 英寸 `in`
- 厘米 `cm`
- 毫米 `mm`
- 四分之一毫米 `q`
- 点 `pt`
  - 一般是打印机和打字机上的单位
- 派卡 `pc`
  - 印刷术语
- 像素 `px`
  - 用户代理可能会忽略掉定义 直接使用屏幕上的像素
  - 因此需要考虑缩放等情况



#### 分辨率单位

用于媒体查询 响应式设计

- 点每英寸 `dpi`
- 点每厘米 `dpcm`
- 点每像素单位 `dppx`



#### 相对长度单位

- `em`

  - 等于元素的`font-size`值
  - 在不同元素之间的值会不同

- `ex`

  - 等于该字体中`x`字母的高度

- `rem`

  - 与`em`几乎相同 但`rem`始终根据**根元素的字号**计算

- `ch`

  - CSS3中定义 : 

  - > 等于渲染时所用字体中 `0` (U+0030) 字形的进距 (advance measure)

  - 进距(advance measure) 实际上是排版中的 进宽 (advance width)

  - 即一个字形的起点到下一个字形的起点之间的距离

  - 一般等于 字形本身宽度 加上 侧边的间距



#### 视区相关单位

- 视区宽度单位 `vw`
  - 视区宽度的百分之一
- 视区高度单位 `vh`
  - 视区高度的百分之一
- 视区尺寸最小值单位 `vmin`
  - 视区宽度或者高度的百分之一 取**较小的**那个
- 视区尺寸最大值单位 `vmax`
  - 视区宽度或者高度的百分之一 取**较大的**那个

以上为 **长度单位**



#### 计算值

`cal()` 为了进行数学计算 

允许的运算有 `+ - * / ()`

**`+ -` 符号的两侧需要有空格 用以区分负数**

[^数量]:规范要求用户代理可以使用 **20** 个算子 超过这一算式应该视为**无效**



#### 属性值

`attr()` 获取对应元素上的`HTML` 值

支持任何属性值 如

```css
input[type="text"] {
    width: attr(maxlength em);
}
```



#### 颜色

##### 具名颜色

目前`HTML 5`已经定义了超过140种的色彩 在此不一一列出了



##### RGA 和 RGBa

`rgb(r,g,b)`

三个参数可以使用数字 即`0~255` 或者百分数 `0~100%`

超出范围的值 CSS会自动选择一个有效值 [^Clamping]



`rgba()` 多了一个`alpha`通道 用来衡量不透明度 取值范围是`0~1`



##### 十六进制 RGB RGBa

```css
color: #333333;
color: #333333CA;
```



##### HSL 和 HSLa 颜色

`Hue` 色相 `Saturation`饱和度 `Lightness`明度

一般用的很少 不在这里



##### 颜色关键字

`transparent`

按照定义 与`rgba(0,0,0,0)` 相等

是背景颜色的默认值

`currentColor`

当前元素`color`属性计算得到的值



#### 角度

一般用 `<angle` 表示  即一个`<number>`后跟以下四个单位中的一个

- `deg`
  - 度数
- `grad`
  - 百分度 一圈为`400 grad`
- `rad`
  - 弧度 一圈为 $2 \pi$
- `turn`
  - 一圈 
  - `turns`是无效的关键字



#### 时间和频率

`<time>` 即一个`<number>`后跟 `s`或者 `ms`

```css
a {
    transition-duration: 2.4s;
}
```



`<frequency>` 即一个`<number>` 后跟`Hz`或者`kHz` **不区分大小写**

```css
h1 {
    pitch: 120hz;
}
```



#### 位置 

`<position>`

取值方式定义如下

PS: 这里的`| ||`  都与书上的约定不太一样 方便理解使用

-  1 个值
  - `[ left | center | right | top | bottom | <percentage> | <length> ]`
  -  第二个值[^不是取一个吗]会被认为是 `center` 
- 2 个值
  - `[ left | center | right | <percentage> | <length> ]`
  - `[ top | center | bottom | <percentage> | <length> ]`
  - 第一个是 **横向值**
  - 第二个是 **纵向值**
- 4 个值
  - 前两个
    - `[ center || [ left | right] [ <percentage> | <length>]? ]`
  -  后两个
    - `[ center || [ top | bottom] [ <percentage> | <length>]? ]`
  - 关键字 + 长度\百分数  关键字 + 长度\百分数 
  - e.g. `right 20px bottom 30px`



[^不是取一个吗]:取一个值 即隐式取了2个值



#### 自定义值

`custom property` 实际上是在CSS中创建一个变量 **区分大小写**

```css
html{
    --david: #AEA;
}
h2{
    color: val(--david);
}
```

`--`开头代表是创建了一个新的变量属性值 

使用值时要用`val()` 



##### 作用域

```css
html {
    --base-color: red;
}
aside {
    --base-color: blue;
}
```

```html
<body>
    <h1>
        Heading 1
    </h1>
    
    <aside>
    	<h1>Aside Heading 1</h1>
    </aside>
    
    <h1>
        Heading 1
    </h1>
</body>
```

结果是 `<aside>` 标签中的颜色是 蓝色

其他的标签都是红色









