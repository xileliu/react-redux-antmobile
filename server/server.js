const  express = require('express');
const app = express();
const mongoose = require('mongoose');

//链接数据库
const DB_URL = 'mongodb://127.0.0.1:27017/xile';
mongoose.connect(DB_URL);

//数据库是否链接成功
mongoose.connection.on('connected',function () {
    console.log('链接成功');
});
//user集合数据模型描述
const User  = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}));
//创建数据
User.create({name:'lele',age:123},function (err,doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
});
app.get('/',function (req,res) {
    res.send('hello word');
});
app.get('/data',function (req,res) {
    res.json({name:'xile'});
})
app.listen(9093,function () {
    console.log('node app start');
});
