//<script src="speechapi.js"></script>

// o que tem na js: ------
// primeiro ativar o microfone
window.addEventListener("DOMContentLoaded",function(){
// variavel recebe a transcrição do audio;  
 var btn_gravacao = document.querySelector('#btn_gravar_audio');
// variavel guarda oque esta sendo falado;
var transcrição_audio='';
 // variavel verifica se esta gravando ---
esta_gravando = false;
// veifica se o navegador tem permissao para utilizarr apis

if(window.speechRecognition || window.webkitSpeechRecognition){

// verificar qual biblioteeca esta sendo usada. Utilizando variavel.

var speecch_api = window.SpeechRecognition || window.webkitSpeechRecognition;

// instanciar objeto da api:
var recebe_audio = new speech_api();

// gravação contínua ----
recebe_audio.continuous =false;
// especifica se resultado final pode ser alterado----
recebe_audio.interimResults=false;
recebe_audio.lang = "pt-BR";

// metodos de controle da api -----
recebe_audio.onstart = function(){
esta_gravando = true;
btn_gravacao.innerHTML = 'gravando';
};

recebe_audio.onend= function(){
    esta_gravando = false;
   btn_gravacao.innerHTML = 'iniciar gravacao';
};

// capta o resultado da gravação do audio
recebe_audio.onresult= function(event){
    console.log(event);
};

btn_gravacao.addEventListener('click',function(e){
recebe_audio.start();

}, false);

}else{
    console.log("navegador nao tem suporte para api");
}
}, false);