
if (document.getElementById("codigo")==null) {
  window.location.href="index.html";
}

document.getElementById("codigo")=LocalStorage.getItem("Codigo");
document.getElementById("nombre")=LocalStorage.getItem("Nombre");
