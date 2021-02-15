//Variaveis de ambiente
var control = 0;
let intervalo;
var s = parseInt(document.querySelector('#sec').innerHTML) + 59;
var m = parseInt(document.querySelector('#min').innerHTML) - 1;
let pomodoro = true,
    longo = false,
    curto = false;

function reset() {
    control = 0;
    playOrPause();
    s = parseInt(document.querySelector('#sec').innerHTML) + 59;
    m = parseInt(document.querySelector('#min').innerHTML) - 1;
}

function selecionar() {
    e = event.toElement.id;
    for (var i = 1; i < 4; i++) {
        document.getElementById(`o${i}`).classList.remove('active');
    }
    document.getElementById(event.toElement.id).classList.add('active');
    if (e == 'o1') {
        document.querySelector('body').style.backgroundColor = 'rgb(219,82,77)';
        document.querySelector('button').style.color = 'rgb(219,82,77)';
        document.querySelector('#sec').innerHTML = '00';
        document.querySelector('#min').innerHTML = '25';
        reset();
        pomodoro = true;
        curto = false;
        longo = false;
    } else if (e == 'o2') {
        document.querySelector('body').style.backgroundColor = 'rgb(70,142,145)';
        document.querySelector('button').style.color = 'rgb(70,142,145)';
        document.querySelector('#sec').innerHTML = '00';
        document.querySelector('#min').innerHTML = '05';
        reset();
        pomodoro = false;
        curto = true;
        longo = false;
    } else if (e == 'o3') {
        document.querySelector('body').style.backgroundColor = 'rgb(67,126,168)';
        document.querySelector('button').style.color = 'rgb(67,126,168)';
        document.querySelector('#sec').innerHTML = '00';
        document.querySelector('#min').innerHTML = '15';
        reset();
        pomodoro = false;
        curto = false;
        longo = true;
    }
}

function resetar() {
    if (pomodoro == true) {
        document.getElementById("o1").click();
    } else if (curto == true) {
        document.getElementById("o2").click();
    } else if (longo == true) {
        document.getElementById("o3").click();
    }
    document.querySelector('.resetar a').style.display = 'none';
}

function playOrPause() {
    if (control == 0) {
        document.querySelector('button').innerHTML = 'começar';
        document.querySelector('button').classList.remove('parar');
        control = 1;
        clearInterval(intervalo);

    } else {
        document.querySelector('button').innerHTML = 'parar';
        document.querySelector('button').classList.add('parar');
        control = 0;
        tempo();
        document.querySelector('.resetar a').style.display = 'block';
    }

}

function tempo() {
    intervalo = setInterval(function() {
        if (s == 0 && m > 0) {
            m--;
            s = 59;
        }
        if (s >= 10) {
            document.querySelector('#sec').innerHTML = `${s}`;
        } else {
            document.querySelector('#sec').innerHTML = `0${s}`;
        }
        if (m >= 10) {
            document.querySelector('#min').innerHTML = `${m}`;
        } else {
            document.querySelector('#min').innerHTML = `0${m}`;
        }
        s--;
        if (m == 0 && s == 0 && pomodoro) {
            document.getElementById("o2").click();
        } else if ((pomodoro == false) && m == 0 && s == 0) {
            document.getElementById("o1").click();
        }
    }, 1000);
}