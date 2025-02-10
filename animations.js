'use strict'

const PIXELDEDECISION = 100;
let isAnimating = false;
let pullDeltaX = 0;
let dislikes = 0;
let likedCards = [];
let i = 0;

function changeMesssage() {
    document.getElementById('message').innerHTML = 'you didnt like everyone!! :c you should try again ;p';
}

function startdrag (event) {
    if (isAnimating) return;

    const actualCard = event.target.closest('article.fotito'); // esto es para arrastrar toda la carta y no solo el "gostoso", por ejemplo
    // el pageX es la posición donde he hecho el click (si ves la consola haciendo un console.log se ve)
    const startX = event.pageX ?? event.touches[0].pageX; // lo último es porque desde el móvil se pueden hacer muchos touches y queremos el primero

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);

    document.addEventListener('touchmove', onMove, {passive: true});
    document.addEventListener('touchend', onEnd, {passive: true});

    function onMove (event) {
        // mientras se mueve vamos a pillar la posición actual
        const currentX = event.pageX ?? event.touches[0].pageX;
        // ponemos la distancia entre el punto actual y el pinto inicial del click
        pullDeltaX = currentX - startX;

        if (pullDeltaX === 0) return
        
        isAnimating = true;

        const deg = pullDeltaX / 10; // grados que giramos la carta

        actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
        actualCard.style.cursor = 'grabbing';

        const opacity = Math.abs(pullDeltaX)/100;
        const isRight = pullDeltaX > 0;
        const isLeft = !isRight;

        const choice_element = isRight
            ? actualCard.querySelector('.choice.likee')
            : actualCard.querySelector('.choice.naah');
        
        choice_element.style.opacity = opacity;
    }

    function onEnd (event) {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);

        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);

        const decisionMade = Math.abs(pullDeltaX) >= PIXELDEDECISION;

        if (decisionMade) {
            const goRight = pullDeltaX >= 0;
            const goLeft = !goRight;

            if (goLeft) {
                changeMesssage();
            }
            if (goRight) {
                likedCards[i] = {imgSrc: actualCard.querySelector('img').src}
                i+=1;
            }
            actualCard.classList.add(goRight ? 'go-right' : 'go-left');
            actualCard.addEventListener('transitionend', () =>{
                actualCard.remove();
            }, { once: true });
        } else {
            actualCard.classList.add('reset');
            actualCard.classList.remove('go-right', 'go-left');
            actualCard.querySelectorAll('.choice').forEach(el => el.style.opacity = 0);
        }
        actualCard.addEventListener('transitionend', () => {
            actualCard.removeAttribute('style');
            actualCard.classList.remove('reset');

            pullDeltaX = 0;
            isAnimating = false;
        });
    }
}

document.addEventListener('mousedown', startdrag);
document.addEventListener('touchstart', startdrag, {passive: true});

function refreshPage() {
    window.location.reload();
}

function removecard() {
    changeMesssage();
    const actualCard = document.querySelector('article.fotito:last-of-type');
    if (!actualCard) return;

    actualCard.classList.add('go-left');

    actualCard.addEventListener('transitionend', () => {
        actualCard.remove();
    }, { once: true });
}

function likedcard() {
    
    const actualCard = document.querySelector('article.fotito:last-of-type');
    if (!actualCard) return;
    likedCards[i] = {imgSrc: actualCard.querySelector('img').src}
    i+=1;

    actualCard.classList.add('go-right');

    actualCard.addEventListener('transitionend', () => {
        actualCard.remove();
    }, { once: true });
}

let actual_image = 0;

function cambiarImagen (direccion) {
    actual_image += direccion;
    actual_image = (actual_image + likedCards.length) % likedCards.length;
    var imageElement = document.getElementById("mostrar");
    imageElement.src = likedCards[actual_image].imgSrc;
}

function pasarizq () {
    cambiarImagen(-1);
}

function pasarder () {
    cambiarImagen(1);
}

function showLikedCards() {

    if (likedCards[0] === undefined) return;

    const divCards = document.querySelector('.cards');
    divCards.remove();

    //ahora creo el historial de favoritos
    
    var elemento = document.querySelector('.liked');

    elemento.style.display = "flex";

    let n = likedCards.length;
    console.log(n);
    var article;
    var img;
    var likedDiv = document.querySelector(".liked");

    article = document.createElement("article");
    img = document.createElement("img");
    img.src = likedCards[0].imgSrc;
    img.alt = "fotos historial";
    img.id = "mostrar";

    article.appendChild(img);
    likedDiv.appendChild(article);
    var texto = document.createElement("h3");
    texto.textContent = "♡liked profiles♡";
    likedDiv.appendChild(texto);

    
    if (n > 1) {
        var buttonContainer1 = document.createElement("div");
        buttonContainer1.classList.add("button-container");

        var button1 = document.createElement("button");
        button1.textContent = "<";
        button1.onclick = pasarizq;
        button1.classList.add("button1");

        buttonContainer1.appendChild(button1);

        var buttonContainer2 = document.createElement("div");
        buttonContainer2.classList.add("button-container");

        var button2 = document.createElement("button");
        button2.textContent = ">";
        button2.onclick = pasarder;
        button2.classList.add("button2");

        buttonContainer2.appendChild(button2);

        likedDiv.appendChild(buttonContainer1);
        likedDiv.appendChild(buttonContainer2);
    }
}