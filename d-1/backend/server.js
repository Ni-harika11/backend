import express from 'express';

const app=express();

const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("server is ready!")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
         {
            "id":1,
            "title":"Hello",
            "content":"noo"
         },
         {
            "id":2,
            "title":"Byy",
            "content":"yess"
         },
         {
            "id":3,
            "title":"ok",
            "content":"nope"
         },
        {
            "id":4,
            "title":"Hiii",
            "content":"node"
        }];
    res.send(jokes);
});


app.listen(port,()=>{
    console.log(`server is runing ${port}`)
})