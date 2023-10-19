


//prendo il bottone
const btnPlay = document.getElementById('play-btn');
//aggiungo listener
btnPlay.addEventListener('click', createGrid);
//funzione on click
function createGrid() {
    // prendo il valore della select difficoltà
    const selectDiff= document.getElementById('difficulty');
    // variabile difficoltà
    let difficulty;
    if (selectDiff.value=== 'easy') {
        difficulty = 100;
    } else if (selectDiff.value=== 'medium'){
        difficulty = 81;
    } else if (selectDiff.value=== 'hard'){
        difficulty = 49;
    }
    console.log(difficulty);
    // prendo il container #playground
    const divPlayground = document.getElementById('playground');
    divPlayground.innerHTML = '';
    for (let i = 0; i < difficulty; i++) {
        // creo singolo quadrato
        createSquare(divPlayground, i, difficulty);

    }


}
function createSquare(divCont, index, diff) {
    const square = document.createElement('div');
    const lineItems = Math.sqrt(diff);
    square.classList.add('box');
    square.style.width= `calc( 100% / ${lineItems})`;
    square.style.height= `calc( 100% / ${lineItems})`;
    square.innerText = index + 1;
    square.addEventListener('click', activeBox)
    divCont.append(square);
    function activeBox() {
        square.classList.add('active');
        console.log(`attivata cella numero: ${this.innerHTML}`);
    }
}



