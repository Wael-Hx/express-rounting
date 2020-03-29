const express = require('express');
const app= express();
const PORT = 3000 ;

let date = new Date(), hour =date.getHours()-1 ;
console.log(hour)
app.listen(PORT , ()=>{console.log('server started on port: '+PORT )}) ;
app.use(express.static('app')) ;
app.use(express.static('public'));

app.use((req , res , next)=> {
    hour<8 || hour>17 ? res.sendFile(__dirname +'/app/status.html') : next();
   
})

 app.get('/', (req , res)=> {
    res.sendFile(__dirname+ '/app/home.html')  
}) 


  