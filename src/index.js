const express =require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const os =require('os');



const app = express();

const port = process.env.port || 4000;

// TO Redis 
const redisClint= redis.createClient({

    url: 'redis://redis:6379'

});

redisClint.on('error', (err)=> {console.log('cant connect to redis !!!')});
redisClint.on('connect',()=>{console.log('connected to Redis !!')});
redisClint.connect();


//TO DB 
mongoose.connect('mongodb://root:example@mongo:27017/').then(()=>{

console.log('connect to DB.. .')

}).catch((err)=>{
 
    console.log(err) ;   
})




app.get('/',(req,res)=> {

    res.send('<h1> Hello Ahmad !! <hr> Hello Roaa!!!! <hr> Welcome To OMAR   AWS using docker-hub  with wathtower <hr> </h1>');

    console.log(`traffic from ${os.hostname}`);

});


app.listen(port,()=>{

    console.log(`App is Running at port : ${port}`)
});