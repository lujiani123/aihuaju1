const MongoClient=require('mongodb').MongoClient
let url="mongodb://localhost:27017"
MongoClient.connect(url,(err,client)=>{
    if(err) return console.error("连接发生错误")
    console.log("连接成功")
    let db=client("users")
})
