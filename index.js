const express=require('express');
const app=express();
require('dotenv').config()
app.get('/',(req,res)=>{
res.send("hello world");
}
)    
const gitdata=[{
    "A":"k",
    "A":"k",
    "A":"k",
    "A":"k",
    "A":"k",
    "A":"k",
    "A":"k"
}]
app.get('/twitter',(req,res)=>{
res.send("twitter hello2 world");
}
)  
app.get('/yogi',(req,res)=>{
res.json(gitdata);
}
)  

app.listen(process.env.PORT,()=>{
    console.log(`listening at ${process.env.PORT}`);
})