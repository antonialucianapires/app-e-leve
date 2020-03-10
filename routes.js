const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'e-leve_data'
});



app.listen(3006, () =>{
  console.log("vai no navegador e  entre em localhost:3006/profile")
})



app.get('/users', function(req,res){
  //conectando ao DB
  connection.getConnection(function(err, connection){
    //executando a query mysql e selecionando todos os dados.
    connection.query(`select email,nome,password,moedas from users where id=2`, function(error, results, fields){
      if (error) throw error;
      //pegando a resposta do servidor
      else {
        console.log(results)
        // console.log(results[0].email)
        res.send(results)
       }
    });
  });
});





// app.post('/users', function(req,res){
//   //conectando ao DB
//   connection.getConnection(function(err, connection){
//     //executando a query mysql e selecionando todos os dados.
//     connection.query('insert * from users', function(error, results, fields){
//       if (error) throw error;
//       //pegando a resposta do servidor
//       else {
//         console.log(results)
//         res.send(results)
//        }
//     });
//   });
// });