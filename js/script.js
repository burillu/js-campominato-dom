
// costante difficoltà
const difficulty = 100;

//prendo il bottone
const btnPlay = document.getElementById('play-btn');
//aggiungo listener
btnPlay.addEventListener('click', createGrid);
//funzione on click
function createGrid() {
    // prendo il container #playground
    const divPlayground = document.getElementById('playground');
    divPlayground.innerHTML='';
    for (let i = 0; i < difficulty; i++) {
        // creo singolo quadrato
        createSquare(divPlayground, i);

    }


}
function createSquare(divCont, index){
    const square = document.createElement('div');
    square.classList.add('box');
    square.innerText= index + 1;
    square.addEventListener('click', activeBox)
    divCont.append(square);
    function activeBox (){
        square.classList.add('active');
        console.log(`cella attivata: ${this.innerHTML}`);
    }
}



