const express = require('express')
const app = express()

const bodyParser = require('body-parser')
// //想要直接render直接渲染页面, Mamet就必须先导入ejs模板
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')


// //将node_modules文件加暴露
app.use('/node_modules',express.static('./node_modules'))

app.get('/', (req, res)=> {
        res.render('index.ejs')
})


app.listen(80, ()=> {
        //80  打开网页默认是80端口
        console.log('success at http://127.0.0.1:80');
        
})