const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// 'La letra "e" es convertida para "enter"'
// 'La letra "i" es convertida para "imes"'
// 'La letra "o" es convertida para "ober"'
// 'La letra "u" es convertida para "ufat"'
// 'La letra "a" es convertida para "ai"'

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if(textArea.value != ""){

        mensaje.style.backgroundImage = "none";
    }
    textArea.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    // textArea.value = "";
    // mensaje.backgroudImagedImage = "";

}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


function btnCopiar(){
    const textoCopiar = mensaje.value;
    navigator.clipboard.writeText(textoCopiar);
    mensaje.value = "";
    mensaje.style.backgroundImage = "imagenes/Muñeco.png";
    textArea.focus();
    textArea.value = textoCopiar;

}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
