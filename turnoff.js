'use strict'

const MAX_VOLUME = 7;
let volume_level = 0;

function check_onoff(){
    var movil = document.getElementById('movil');
    if (movil.style.display === 'none') {
        turnon();
    } else {
        turnoff();
    }
}

function turnoff(){
    var movil = document.getElementById('movil');
    movil.style.display = 'none';
}

function turnon(){
    var movil = document.getElementById('movil');
    movil.style.display = 'flex';
}

function volume_up(){
    let volumen;

    if (volume_level < MAX_VOLUME) {
        volume_level += 1;

        switch (volume_level) {
            case(1):
                volumen = document.getElementById('volumen1');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(2):
                volumen = document.getElementById('volumen2');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(3):
                volumen = document.getElementById('volumen3');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(4):
                volumen = document.getElementById('volumen4');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(5):
                volumen = document.getElementById('volumen5');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(6):
                volumen = document.getElementById('volumen6');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(7):
                volumen = document.getElementById('volumen7');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
        }
    } else {
        volumen = document.getElementById('volumen7');
        volumen.classList.add('fade-in-image');
        setTimeout(function() {
            volumen.classList.remove('fade-in-image');
            volumen.classList.add('fade-out-image');
            setTimeout(function() {
                volumen.classList.remove('fade-out-image');
            }, 2200);
        }, 2200);
    }
   
}

function volume_down(){
    let volumen;
    
    if (volume_level > 0) {
        volume_level -= 1;

        switch (volume_level) {
            case(0):
                volumen = document.getElementById('volumen0');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(1):
                volumen = document.getElementById('volumen1');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(2):
                volumen = document.getElementById('volumen2');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(3):
                volumen = document.getElementById('volumen3');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(4):
                volumen = document.getElementById('volumen4');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(5):
                volumen = document.getElementById('volumen5');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
            case(6):
                volumen = document.getElementById('volumen6');
                volumen.classList.add('fade-in-image');
                setTimeout(function() {
                    volumen.classList.remove('fade-in-image');
                    volumen.classList.add('fade-out-image');
                    setTimeout(function() {
                        volumen.classList.remove('fade-out-image');
                    }, 2200);
                }, 2200);
                break;
        }
    } else {
        volumen = document.getElementById('volumen0');
        volumen.classList.add('fade-in-image');
        setTimeout(function() {
            volumen.classList.remove('fade-in-image');
            volumen.classList.add('fade-out-image');
            setTimeout(function() {
                volumen.classList.remove('fade-out-image');
            }, 2200);
        }, 2200);
    }
}