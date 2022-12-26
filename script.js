    const botonEncriptado = document.querySelector('#botonEncriptado');
    const botonDesencriptado = document.querySelector('#botonDesencriptado');
    const botoncopiar = document.querySelector('#botonCopiar');

   
    botonEncriptado.addEventListener('click', encriptar); 
    botonDesencriptado.addEventListener('click', desencriptar);
    botoncopiar.addEventListener('click', copiar);
    
   

function encriptar(){
    var frase = document.getElementById("textoIngresado").value.toLowerCase();

    var textoIngresado = frase.replace(/e/img, "enter");
    var textoIngresado = textoIngresado.replace(/i/img, "imes");
    var textoIngresado = textoIngresado.replace(/a/img, "ai");
    var textoIngresado = textoIngresado.replace(/o/img, "ober");
    var textoIngresado = textoIngresado.replace(/u/img, "ufat");

    document.getElementById("lupa").style.display = "none";
    document.getElementById("textoEncriptado").innerHTML = textoIngresado;
    
}



function desencriptar(){
    var frase = document.getElementById("textoIngresado").value.toLowerCase();

    var textoIngresado = frase.replace(/enter/img, "e");
    var textoIngresado = textoIngresado.replace(/imes/img, "i");
    var textoIngresado = textoIngresado.replace(/ai/img, "a");
    var textoIngresado = textoIngresado.replace(/ober/img, "o");
    var textoIngresado = textoIngresado.replace(/ufat/img, "u");

    
    document.getElementById("textoEncriptado").innerHTML = textoIngresado;

}
function copiar(){
    var contenido = document.querySelector("#textoEncriptado");
    contenido.select();
    document.execCommand("copy"); 
    alert("Se copio el mensaje.");
}

