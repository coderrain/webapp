const express = require('express');
const fs = require('fs');
const app = express();
const swig = require('swig');
let bodyParser = require('body-parser');
let session = require('express-session');
//const cookieParser=require("cookie-parser");
//app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1000
}))

app.use(session({
    secret :  '123', // 对session id 相关的cookie 进行签名
    resave : true,
    name: 'sessionId',
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000*60*60*24 //900000 设置 session 的有效时间，单位毫秒
    },
}));

app.use('/static', express.static('public'));
swig.setDefaults({cache: false});
app.set('view cache', false);
app.set('views','./views');
app.set('view engine','html');
app.engine('html', swig.renderFile);


app.get('/', (req, res, next)=>{
    if(!req.session.islogin) {
        return res.redirect('/login')
    }
    res.render('index',{
        login: req.session.islogin
    })
})

app.get('/reg', (req, res, next)=>{
    res.render('reg',{})
})


app.get('/login', (req, res, next)=>{
    res.render('login',{})
})


app.post('/login', (req, res, next)=>{
    var body = req.body;
    if(body.username === 'admin' && body.password === '123'){
        req.session.islogin = body.username;
        res.redirect('/')
    }else{
        res.redirect('/login')
    }

})


app.get('/thing', (req, res, next) =>{
    let name = req.query["name"] || 'iphone';
    fs.readFile('./data.json',  (err, data)=>{
        if(err) return err;
        data = JSON.parse(data);
        for(var i=0;i<data.length;i++) {
            if(data[i].name === "iphone") {
                return res.json({
                    code: 1,
                    data: data[i]
                })
            }else if(data[i].name === "ipad"){
                return res.json({
                    code: 1,
                    data: data[i]
                })
            }else{
                return res.json({
                    code: 1,
                    data: {}
                })
            }
        }
    });

})


app.post('/reg', (req, res, next) => {
    var params = req.body;
    fs.writeFile('./userinfo.txt', JSON.stringify(params),(err)=>{
       // res.json({code: 1, msg: 'success'})
        res.redirect('/login')
    })
})

app.listen('8085', () => {
    console.log('8085')
})