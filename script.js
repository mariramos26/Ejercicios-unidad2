function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

function calcular(){
    document.getElementById("pantalla").value =
    eval(document.getElementById("pantalla").value);
}

function borrar(){
    document.getElementById("pantalla").value = "";
}

function porcentaje(){
    let valor = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = valor / 100;
}