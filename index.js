const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql2');


app.use(express.json())
app.use(bodyParser.urlencoded({extends:true}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
      connection.query(
  'SELECT * FROM `users`',
  function(err, results) {
    if(results){
       res.send(results)
    }
  }
)
})






// create the connection to database
const connection = mysql.createConnection({
  host: 'bkll8qpenqvcybuhk1qb-mysql.services.clever-cloud.com',
  user: 'uvgq5wbdxfh5oga5',
  password: 'WcSPtMuQjCLFAHaWbE4B',
  database: 'bkll8qpenqvcybuhk1qb'
});




















const port = process.env.PORT || 3000
    


app.listen(port,()=>{console.log(port)})

// index.js
module.exports = app