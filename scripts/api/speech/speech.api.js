//ativando o microfone
window.addEventListener("DOMContentLoaded", function () {
    $("#btn_start").click(function () {
        $('.progress').show();
        if (window.speechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition) {

            //criando o objeto da API
            var recebe_audio = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
            
            //gravacao continua
            //recebe_audio.continuous = true;
            
            //iniciando a gravacao
            recebe_audio.start();

            //resultado da gravacao
            recebe_audio.onresult = function (event) {
                var result = event.results[0][0].transcript;
                console.log(result);
                //var last = event.results.length - 1;
                //var cmdArray = event.results[last];
                $('.progress').hide();
                document.getElementById("res").innerHTML = result;
            };

            recebe_audio.onnomatch = function (event) {
                console.log('Sem Resposta!');
            }

            recebe_audio.onspeechend = function () {
                console.log('A fala parou de ser detectada');
            }

            recebe_audio.onerror = function (event) {
                console.log('Erro de reconhecimento de fala detectado: ' + event.error);
            }
        };
    });


});