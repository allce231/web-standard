# H5资源汇总
- 开发联调环境：

```javascript
//baseUrl
const baseUrl = 'http://172.21.255.33'
```

- 测试环境：

```javascript
//baseUrl
const baseUrl = 'http://172.21.255.32'
```

- 生产环境：待定

## 用户app

```javascript
const url = baseUrl + "/app"
// http://172.21.255.33/app (开发联调环境)
// http://172.21.255.32/app (测试环境)
```
> 测试环境：[跳转至用户app相关页面](http://172.21.255.32/app)

## 长者端app

```javascript
const url = baseUrl + "/box"
// http://172.21.255.33/box (开发联调环境)
// http://172.21.255.32/box (测试环境)
```
> 测试环境：[跳转至长者端app相关页面](http://172.21.255.32/box)

## 运营后台
```javascript
const url = baseUrl + "/admin"
// http://172.21.255.33/admin (开发联调环境)
// http://172.21.255.32/admin (测试环境)
```
> 测试环境：[跳转至运营后台](http://172.21.255.32/admin)



## 握力球小游戏
- flappy-bird
```
const url = baseUrl + "/game/dist/flappy-bird/"
```
> 测试环境：[跳转至flappy-bird](http://172.21.255.32/game/dist/flappy-bird/)
- rabbit-jump
```
const url = baseUrl + "/game/dist/rabbit-jump/"
```
> 测试环境：[跳转至flappy-bird](http://172.21.255.32/game/dist/rabbit-jump/)

## 最强大脑11个小游戏
```
// for app
const url = baseUrl + "/game/mg/index.html"

// for box
const url = baseUrl + "/game/mg/pad.html"
```
> 示例：<br>
> 测试环境for app：[跳转至最强大脑11个小游戏](http://172.21.255.32/game/mg/index.html)<br>
> 测试环境for box：[跳转至最强大脑11个小游戏](http://172.21.255.32/game/mg/pad.html)