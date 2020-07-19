# HTML 5 

## 标签了解

### fieldset

### legend



## meta 标签

```html
项目描述
<meta name="description" content="">
关键字
<meta name="keywords" content="">
项目标签图片
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```



## IE 浏览器的渲染

```html
IE7引擎渲染
<meta http-equiv="X-UA-Compatible" content="IE=7">
IE8 渲染
<meta http-equiv="X-UA-Compatible" content="IE=8">
以最高版本的IE来渲染画面
<meta http-equiv="X-UA-Compatible" content="IE=edge">
强制使用 Chrome Frame 渲染
<meta http-equiv="X-UA-Compatible" content="chrome=1">
最佳的兼容模式方案
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```



## 重置浏览器的默认样式

`normalize.css`

现代的 H5就绪的CSS重置替代方案

相比其他的一些项目 有更好的优化解决



## 公共组件

不同的页面之间 会有相同的模块 写样式的时候可以把这些样式写在一个文件内 

`common.css`



## 命名规范

- 头部 `header`
- 脚底 `footer`
- 导航 `nav`
- 标志 `logo`
- 搜索 `search`
- 新闻 `news`
- 图标 `icon`



### CSS 书写顺序

1. 位置属性

   > ```css
   > position
   > top
   > right
   > z-index
   > display
   > float
   > ```
   >
   > 规定好方位

2. 尺寸大小

   > ```css
   > width
   > height
   > padding
   > margin
   > ```
   >
   > 规定每个部分的大小

3. 背景边框

   > ```css
   > background
   > border
   > ```
   >
   > 修饰组件

4. 文字系列

   > ```css
   > font
   > line-height
   > letter-spacing
   > color-text-align
   > ```
   >
   > 具体组件内的装饰

5. 其他

   > ```css
   > animation
   > trasition
   > ```
   >
   > 后期的配套 辅助内容



## 设计 : 颜色 字体

### 提供来源

1. 由设计师提供的项目标准色
2. 自己确定





## 语义化标签

H5新出现的内容

语义化标签 旨在让标签有自己的含义

> 代码结构清晰 方便阅读 适合多人合作
>
> 方便其他设备解析以语义化的形式来渲染网页
>
> 有利于 SEO