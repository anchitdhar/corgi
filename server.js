import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import path from 'path'

const PORT = process.env.PORT || 8000;

var app = express();

app.get('/',(req,res) => {
res.send('sdaad');
})

app.listen(PORT,() =>{
    console.log(`Server is running at Port ${PORT}`);
})