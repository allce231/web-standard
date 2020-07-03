# 编辑器设置

统一前端的编码工具，让所有前端工程师有一样的格式化代码

## 编辑器

前端的代码编辑器为：[VS Code](https://code.visualstudio.com/)

## 编辑器插件

- EditorConfig for VS Code
- ESLint
- stylelint
- SCSS IntelliSense
- IntelliSense for CSS class names in HTML
- Vetur
- Prettier
- Vue VSCode Snippets
- Vue 2 Snippets

## VSCode 设置

按 Ctrol+P 打开文件快捷搜索框，输入 settings.json,添加以下代码，会自动检测 JS，CSS，html 是否符合代码规范，不符合规范，将自动修复：

```js
{
  "editor.wordWrap": "on",
  "editor.fontSize": 12,
  "editor.tabSize": 2,
  "css.validate": false,
  "scss.validate": false,
  "editor.formatOnSave": false,
  "[vue]": {
    "editor.formatOnSave": true
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 60,
      "wrap_attributes": "force"
    }
  },
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "html-css-class-completion.excludeGlobPattern": "**/node_modules",
  "html-css-class-completion.includeGlobPattern": "**/*.{css,scss,html}",
  "scss.scannerExclude": [
    "**/.git",
    "**/node_modules",
    "**/bower_components"
  ],
  "scss.scannerDepth": 5,
  "workbench.colorTheme": "Dracula",
  "stylelint.configOverrides": {
    "ignoreFiles": [
      "**/dist/**",
      "**/_sprite.scss",
      "**/_reset-vendor.scss",
      "**/*.vue"
    ]
  },
  "emmet.includeLanguages": {
    "vue-html": "html"
  },
  "window.zoomLevel": 0,
  "editor.maxTokenizationLineLength": 2000000,
  "breadcrumbs.enabled": true,
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
  "workbench.editor.enablePreview": false,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "svn.enableProposedApi": "product",
  "files.exclude": {
    "node_modules": true
  }
}
```

## 文档格式规范

- 项目根目录添加.editorconfig 文件
- 为使 Window、Mac、Linux 下有相同的文件格式，设置值如下：
  <br>
  <br>

| 项                     | 值                   |
| ---------------------- | -------------------- |
| 文档编码               | utf-8                |
| 代码缩进               | 2 个空格             |
| 行尾                   | 换行符 lf(无回车 cr) |
| 文档最后保留一个空白行 | ture                 |

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true

```
