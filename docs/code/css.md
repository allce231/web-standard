# CSS规范
## 命名规范：采用<a href="http://www.getbem.com/" target="_blank">BEM</a>的一种变体规范(re3规范)
.namespace-unit.xmodifier

### 名词解释
+ 样式模块：指页面中有明显视觉边界的视觉单元或完整的功能模块(如:导航，布局结构等);
+ 功能单元：指整站通用的单一功能性样式;
+ 命名空间：指项目采用的统一css前缀,分为两种：
   + `.sqk-`：表示一个样式模块前缀;
   + `.name-function`：表示一个功能单元。

### 命名方式
1. 样式单元：命名空间-单元名称(如: `.sqk-nav` )；
2. 后代元素：样式单元-后代元素类名(如: `.sqk-nav-link`  或  `.sqk-nav-linkico` )。
3. 功能单元：命名空间-x功能名称(如: `.sqk-xhide` )

### 修饰符
1. 使用场景：当一个样式单元类某些小细节需要修改时，加修饰符来控制需要修改部份的样式；
2. 用法限制：修饰符不能单独使用，必须配合组件或组件后代元素一起使用；
3. 命名原则：修饰符统一以x字母开头，后面跟修饰符名；
4. "x"解析：避免与引入的其它样式库的类名冲突，英文中以x开头的字母最少，为中文修饰符【修】字的拼音首字母。

### 选择器
+ 禁止使用ID选择器；
+ 慎用标签选择器,除非能够保证其唯一性；
+ 慎用后代选择器，只有当存在修饰符时，或后代为唯一的标签选择器时，才允许使用后代选择器。

### 代码示例
```css
/* 头部:通用 */
.sqk-header { height:60px; }
.sqk-header-logo { padding-top:12px;  }
.sqk-header-logotext { font-size:16px; }

/* 头部:小尺寸(用修饰符更改细节) */
.sqk-header.xsmall { height:45px; }
.sqk-header-logo.xsmall { padding-top:8px;  }
.sqk-header-logotext.xsmall { font-size:14px; }
```

### 错误示例

| 错误写法 | 正确写法 | 错误说明 |
| ------- | -------- | --- |
| `.card` | `.sqk-card` | 必须有命名空间前缀 |
| `.sqk-card li` | `.sqk-list > li` | 污染性大，不能确定后代li选择器的唯一性 |
| `.sqk-card > .sqk-card-header` | `.sqk-card-header` | 无意义的父类限定 |
| `.sqk-card-header-text` | `.sqk-card-headertext` | 样式单元所有后代元素的类名:样式单元-后代类名 |
| `.xblue` | `.sqk-card.xblue` | 修饰符不能单独使用 |
| `.sqk-card.blue` | `.sqk-card.xblue` | 修饰符必须以字母x开头 |
| `.sqk-textmain {color: $color-text-main;}` | `.text-main {color: $color-text-main;}` | 功能单元命名格式为 `.name-function` |



## css reset示例
## PC端
```css
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form,header,section,article,footer{margin:0;}
body,button,input,select,textarea{font:12px/1.5 tahoma,'\5FAE\8F6F\96C5\9ED1',sans-serif}
h1,h2,h3,h4,h5,h6{font-size:100%}
em,b{font-style:normal}
a{text-decoration:none} 
a:hover{text-decoration:underline}
img{border:0} 
body{padding-top:42px} 
button,input,select,textarea{font-size:100%;outline:none}
table{border-collapse:collapse;border-spacing:0}
td,th,ul,ol{padding:0}
```
## 移动端
有较多文字的文章类页面：
```css
/* 移动端常用reset.css (文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;}
a {text-decoration:none;}
ul,li{list-style: none}
```
如果页面无文字，或者不希望文字被长按选中，可使用下面的reset；适合于大多数专题页面:
```scss
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75  -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;-webkit-tap-highlight-color: rgba(0,0,0,0);}
a {text-decoration:none;}
ul,li{list-style: none}
a, img {-webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */}
html, body {
    -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
    user-select: none;
}
```

::: tip 提示
移动端页面不需要设置微软雅黑、宋体等字体，终端浏览器字体取决于设备上的系统字体。
:::