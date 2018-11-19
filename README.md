# 项目流程

## 第一步
    安装nodejs和npm环境
## 第二步
    在这个目录下安装依赖的包文件 npm install
## 第三步
    在当前目录下执行node app
## 第四步
    访问首页http://localhost:8085/
    
    
## 文档
- public 
   - 文件夹是存放静态文件css/js/img 访问他们的时候通过
   - 地址/static/js/jquery-3.3.1.min.js
- views
   - 他就是你写静态页面的时候写的地方
   - 模板：swig模板 应该自己去学习这个模板
- app.js
   - 启动项目的入口文件
   - 怎么启动 node app
- package.json
   - 依赖包 npm install
   - 安装哪些包都需要他说的算
   
   
##  访问路径

http://localhost:8085 相等于访问views里面的index.html页面
http://localhost:8085/login 相当于访问views里面的login.html页面
http://localhost:8085/reg 相当于访问views里面的reg.html页面


## 接口文档
- 域名（ip）：http://localhost:8085
- 登录
   - 接口地址： /login
   - 方式：post
   - 参数：username password
   - 成功失败，传统的form不需要前端管任何事，只要把地址和参数搞清楚

- 注册
   - 接口地址： /reg
   - 方式： post
   - 参数： username password sex address
   
   
## views里面的参数
- index.html
   - login 用户名


   