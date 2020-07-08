# vue项目规范
## 采用vue.cli 3.0
安装：
```shell
npm install -g @vue/cli
```
创建一个项目：
```shell
vue create my-project
```

#### 1.先选择一个预设（之前创建过vue项目并保存了预设）
```shell{4}
? Please pick a preset:
  hanson-preset (node-sass, babel, router, vuex, eslint)
  default (babel, eslint)
> Manually select features  
```
#### 2.选择预设清单如下

```
? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
>(*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing   
```
::: tip 提示
方向键移动 空格选择 回车确定
:::

#### 3.路由模式选择
```
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)   n
```
::: tip 提示
这里我们不用history模式 我们填否n
:::

#### 4.css预编译器选择
```shell {3}
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  Sass/SCSS (with dart-sass)
> Sass/SCSS (with node-sass)
  Less
  Stylus  
```

#### 5.js格式化工具选择
```shell {5}
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier 
```

#### 6.保存时lint
```shell {2}
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit  
```

#### 7.Babel, ESLint, etc 配制项文件
```shell {2}
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json 
```

#### 8.何存vue.cli预设 下次可以直接选用些预设
```
? Save this as a preset for future projects? (y/N)  y
```

#### 9.选择包管理工具我们选npm
```shell {3}
? Pick the package manager to use when installing dependencies:
  Use Yarn
> Use NPM   
```

#### 10.结束
```shell
npm run serve //启动项目
```