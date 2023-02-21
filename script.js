let digitalElement = document.querySelector('.digital'); //Selecione o relogio Digital
let sElement= document.querySelector('.p_s');// Ponteiro Segundo
let mElement= document.querySelector('.p_m');//Ponteiro Minutos
let hElement= document.querySelector('.p_h');//Ponteiro Hora

function upClock(){
    let now = new Date();// Date() é uma função da data do javaScript
    let hour = now.getHours(); // hora atual
    let minute = now.getMinutes();// minutos atuais
    let second = now.getSeconds(); // segundos atuais

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;


    //++++++DIGITAL+++++++//

    let sDeg = ((360/60) * second) - 90;// Para rotação do ponteiro(VERMELHO) de segundos. 
                                       //Calculo: relogio digital tem uma angulo de 360º. Dividindo o angulo com o total de segundos,
                                      //  multiplicando os segundos atuais e o resultado diminui com o angulo de 90º
                                      //  a rotação do potenteiro sera de acordo ao movimento dos segundos atuais.
    let mDeg = ((360/60)* minute) - 90;
    let hDeg = ((360/12) * hour) - 90;
                                
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    }

    //Função que coloca o "ZERO" na frente dos segundos
    function fixZero(time){
        if(time < 10){
            return '0'+time;
        }else{
            return time;
        }
    }

// Tempo estimado para aparecer o relogio quando dar o flash na pagina
setInterval(upClock,1000);
upClock();
//========Digital=========//



