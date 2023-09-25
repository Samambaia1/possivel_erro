// Pom ----------------------------------------
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



let contador = 0;
//Enquanto
while (contador  < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
//constante audio
    const idAudio = '#som_$(instrumento)';
//console.log(instrumento);



    tecla.onclick = function (){
    tocaSom (idAudio)
}
    contador = contador + 1;

    //console.log(contador);
}
