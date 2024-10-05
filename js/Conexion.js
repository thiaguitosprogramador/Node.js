const mysql = require('mysql2');

// Crear una conexión
const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
  user: 'root', // Tu usuario de la base de datos
  password: '', // Tu contraseña de la base de datos
  database: 'elciervo' // Nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.log("error we");
  }else{
 console.log('Conectado como id ' + connection.threadId);
  }
 
});


//Guardo en una constante el comando selecionar todos los datos de comidas
const Tabla = "SELECT * FROM comidas";
//Hago una peticion con el comando y que se va a hacer(tabla, funcion a hacer)
connection.query(Tabla,function(err,lista){
if(err){
  throw err;
}else{
  console.log(lista);
}


})
connection.end();