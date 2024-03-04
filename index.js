const express=require('express');
const app=express();
require('dotenv').config()
app.get('/',(req,res)=>{
res.send("hello world");
}
)  
app.get('/twitter',(req,res)=>{
res.send("twitter hello2 world");
}
)  

app.listen(process.env.PORT,()=>{
    console.log(`listening at ${process.env.PORT}`);
})