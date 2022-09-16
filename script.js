const inputTexto= document.querySelector (".input-texto");
const mensaje= document.querySelector(".mensaje");
const botónCopiar= document.querySelector(".copiar");
const titulo= document.querySelector(".titulo")
const parrafo= document.querySelector(".parrafo")
botónCopiar.style.display="none"


function botónEncriptar(){
    const textoEncriptado = encriptar (inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value=""
    botónCopiar.style.display= "block"
    titulo.style.visibility="hidden"
    parrafo.style.visibility="hidden"
   
    
}

function encriptar(palabraEncriptada){
    let lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    palabraEncriptada = palabraEncriptada.toLowerCase();

    for(let i= 0; i < lista.length; i++) {
        if(palabraEncriptada.includes(lista[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(lista[i][0],lista[i][1])
        }        
    }
    return palabraEncriptada;
}


function botónDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado
    inputTexto.value = "" 
    mensaje.style.backgroundImage = "none"
    titulo.style.visibility="hidden"
    parrafo.style.visibility="hidden"
    botónCopiar.style.display="block"
   botónCopiar.focus();
}

function desencriptar(palabraDesencriptada){
    let lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    palabraDesencriptada = palabraDesencriptada.toLowerCase();

    for(let i= 0; i< lista.length; i++) {
        if(palabraDesencriptada.includes(lista[i][0])){
            palabraDesencriptada = palabraDesencriptada.replaceAll(lista[i][1],lista[i][0])
        }        
    }
    return palabraDesencriptada;
}

 function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value ="";
    alert("Texto Copiado")
    mensaje.style.backgroundImage = "url(imagenes/muñeco.png)"
    titulo.style.visibility="visible"
    parrafo.style.visibility="visible"
    botónCopiar.style.display="none"
}
 


