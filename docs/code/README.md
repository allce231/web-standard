# 目录规范

从可维护性，可扩展性方面来规范前端项目的目录结构

## 文件夹命名规范
> 属于components文件夹下的子文件夹，使用大写字母开头的PascalBase风格
+ 全局通用的组件放在 /src/components下
+ 其他业务页面中的组件，放在各自页面下的 ./components文件夹下
+ 每个components文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有index.vue或
index.js，其他.vue文件统一大写开头（Pascal case），components下的子文件夹名称统一大写开头（PascalCase）
其他文件夹统一使用kebab-case的风格

## 目录与文件命名规范 
> 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

> 单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

> 来源:[vue官方规范](https://cn.vuejs.org/v2/style-guide/#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

### 命名示例
```
ListGroup // 正确
List-Group // 错误
list_group // 错误
list-group // 正确
```

## 文件组织

严格遵守资源就近维护原则，除公用的资源外，其他所有资源都放在同一文件夹下。

```
/* 不推荐：分类组织结构-资源分散,不利于维护 */
root
  ├─components
  |   └─ header.vue
  ├─i18n
  |   ├─ header-zh-cn.js
  |   └─ header-en-us.js
  ├─images
  |   └─ header.png
  └─scss
     └─ header.scss


/* 推荐：资源就近维护 */
components
  ├─ header
  |   ├─ header.vue
  |   ├─ header.png
  |   ├─ header.scss
  |   └─ i18n
  |       ├─ header-zh-cn.js
  |       └─ header-en-us.js
  ├─ ...
```
