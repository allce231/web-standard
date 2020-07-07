(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(e,s,a){"use strict";a.r(s);var t=a(42),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"目录规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[e._v("#")]),e._v(" 目录规范")]),e._v(" "),a("p",[e._v("从可维护性，可扩展性方面来规范前端项目的目录结构")]),e._v(" "),a("h2",{attrs:{id:"文件夹命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件夹命名规范"}},[e._v("#")]),e._v(" 文件夹命名规范")]),e._v(" "),a("blockquote",[a("p",[e._v("属于components文件夹下的子文件夹，使用大写字母开头的PascalBase风格")]),e._v(" "),a("ul",[a("li",[e._v("全局通用的组件放在 /src/components下")]),e._v(" "),a("li",[e._v("其他业务页面中的组件，放在各自页面下的 ./components文件夹下")]),e._v(" "),a("li",[e._v("每个components文件夹下最多只有一层文件夹，且文件夹名称为组件的名称，文件夹下必须有index.vue或\nindex.js，其他.vue文件统一大写开头（Pascal case），components下的子文件夹名称统一大写开头（PascalCase）\n其他文件夹统一使用kebab-case的风格")])])]),e._v(" "),a("h2",{attrs:{id:"目录与文件命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录与文件命名规范"}},[e._v("#")]),e._v(" 目录与文件命名规范")]),e._v(" "),a("blockquote",[a("p",[e._v("单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。")])]),e._v(" "),a("blockquote",[a("p",[e._v("单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。")])]),e._v(" "),a("blockquote",[a("p",[e._v("来源:"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue官方规范"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"命名示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名示例"}},[e._v("#")]),e._v(" 命名示例")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ListGroup // 正确\nList-Group // 错误\nlist_group // 错误\nlist-group // 正确\n")])])]),a("h2",{attrs:{id:"文件组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件组织"}},[e._v("#")]),e._v(" 文件组织")]),e._v(" "),a("p",[e._v("严格遵守资源就近维护原则，除公用的资源外，其他所有资源都放在同一文件夹下。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* 不推荐：分类组织结构-资源分散,不利于维护 */\nroot\n  ├─components\n  |   └─ header.vue\n  ├─i18n\n  |   ├─ header-zh-cn.js\n  |   └─ header-en-us.js\n  ├─images\n  |   └─ header.png\n  └─scss\n     └─ header.scss\n\n\n/* 推荐：资源就近维护 */\ncomponents\n  ├─ header\n  |   ├─ header.vue\n  |   ├─ header.png\n  |   ├─ header.scss\n  |   └─ i18n\n  |       ├─ header-zh-cn.js\n  |       └─ header-en-us.js\n  ├─ ...\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);