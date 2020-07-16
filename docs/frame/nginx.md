# nginx 以33服务器为例
## 1. 安装nginx
> 略
## 2. nginx 安装好的路径
```shell
cd /usr/local/nginx # 主目录
```
## 3. nginx 常用命令
```shell
/usr/local/nginx/sbin/nginx -t # 检查nginx配置是否ok
/usr/local/nginx/sbin/nginx start # 启动 nginx 服务
/usr/local/nginx/sbin/nginx restart # 重启 nginx 服务
/usr/local/nginx/sbin/nginx -s stop    #停止服务器 
/usr/local/nginx/sbin/nginx -s reload #重新加载配置
```

## 4. nginx 基本配置
```shell
cd /usr/local/nginx/conf
vi ./nginx.conf
```

```nginx
# 盒子
location /box {
    alias  /usr/local/app/web/sqk-box/dist;
    index  index.html index.htm;
}
# 用户app
location /app {
    alias  /usr/local/app/web/sqk-app/dist;
    index  index.html index.htm;
}
# 运营后台
location /admin {
    alias  /usr/local/app/web/sqk-admin/dist;
    index  index.html index.htm;
}

# 游戏
location /game {
    alias  /usr/local/app/web/sqk-game;
    index  index.html index.htm;
}

# 游戏资源代理
location /mg/ {
    alias /usr/local/app/web/sqk-game/mg/;
}

location / {
    root   html;
    index  index.html index.htm;
}
```

::: tip 提示
前端所有项目均采用主域名+二级目录方式访问 如有新的项目请在上面新增二级目录
:::

```shell
/usr/local/app/web/ # 文件目录均放在此文件夹内 正常都是通过jenkins打包后cp 到此目录
```

::: danger 警告
前端所有服务器文件目录地址应该是一至的 从而减少配置而导致的问题
:::

## 5.常见问题
### 5.1 nginx 开放跨域
```nginx
location / {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    if ($request_method = 'OPTIONS') {
        return 204;
    }
}
```