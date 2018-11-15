var mongoose = require("mongoose"); //引入mongoose

var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/test',function (err) {
    if(!err){
        console.log('connect to mongodb')
    }else {
        throw err
    }
})

var TodoSchema = new mongoose.Schema({
    user_id: String, //定义一个属性user_id，类型为String
    content: String  //定义一个属性content，类型为String
});

mongoose.model('Todo', TodoSchema); //将该Schema发布为Model

var Todo = mongoose.model('Todo')

var todo = new Todo({
    user_id: '344hjhj34234',
    content: 'redssdffd'
})

todo.save(function (err) {
    if(err){
        throw err
    }else {
        console.log('success')
    }
})

Todo.findOne({'user_id':'34434234'},function (err,doc) {
    if(!err){
        console.log(doc,'data')
    }else {
        throw err
    }
})
