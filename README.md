# my_blog
###环境的搭建

####所需下载的包

```
npm init -y    初始化文件
npm install express 下载文件
npm install ejs    使用 ejs 模板引擎
npm i bootstrap@3 指定3系版本
npm i jquery     bt是在juery基础上
npm i moment 时间格式化
npm i mysql 链接数据库
```

#### 注意事项

```
使用reander 函数之前,一定要先安装和配置了ejs模板引擎
app.set('views engine', 'ejs')
app.set('views', './viewx')

app.reander('index.ejs',{name:'zs', age:'22'})
使用模板  <%= name%>
使用的静态页面  .ejs结尾  不是html结尾
```

````
下载模板的时候,可以开两个终端,保证服务器app.js不停止

托管node_modules 文件,让在主页的时候请求到各类模块
app.use('/node_modules',express.static('./node_modules'))
````

### 主页的美化

使用bootstrap里面的导航条