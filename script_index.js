


document.getElementById("ingresar").onclick=function(){

codigo=document.getElementById("codigo").value;
clave=document.getElementById("clave").value;

  
if(codigo==""){
  alert("llene los campos");
}else if(clave==""){
  alert("llene los campos");
}else{



  
var url = 'https://api-parcial.crangarita.repl.co/login';
var data = {codigo: codigo, clave: clave};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {

LocalStorage.setItem("Codigo",response.codigo);
LocalStorage.setItem("Nombre",response.nombre);
LocalStorage.setItem("Email",response.email);
  
});


window.location.href="dashboard.html";
}
}




