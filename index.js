const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql2');

app.set('views',path.join(__dirname,'templates'))
app.set('view engine', 'twig')

//middleware
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json())

// create the connection to database
const connection = mysql.createConnection({
  host: 'bkll8qpenqvcybuhk1qb-mysql.services.clever-cloud.com',
  user: 'uvgq5wbdxfh5oga5',
  password: 'WcSPtMuQjCLFAHaWbE4B',
  database: 'bkll8qpenqvcybuhk1qb'
});




app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/service',(req,res)=>{
      connection.query(
  'SELECT * FROM `users`',
  function(err, results) {
    if(results){
        console.log(results)
         res.render('service',{data:results})
    }
  }
)
})

app.get('/chat',(req,res)=>{

  res.render('register')
   
})

app.post('/postUser',(req,res)=>{
     connection.query(
  'INSERT INTO users(user,email,password) VALUES(?,?,?)',[req.body.user,req.body.email,req.body.password],
  function(err, results) {
    if(results){
         res.redirect('/chat')
         console.log('data inserted')
    }else{
        res.redirect('/chat')
        console.log(err)
    }
  }
)
})


app.get('/team',(req,res)=>{
    res.render('teams')
})

















const port = process.env.PORT || 3000
    


app.listen(port,()=>{console.log(port)})

// index.js
module.exports = app