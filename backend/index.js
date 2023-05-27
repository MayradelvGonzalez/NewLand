const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req,res) => {
    res.json('Hola desde el servidor')
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})