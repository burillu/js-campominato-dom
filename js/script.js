
campoMinato();

function campoMinato(){

    // costante difficoltà
const difficulty = 100;
//costante bombe
const BOMB_NUM= 16;

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
        createSquare(divPlayground, i,difficulty);

    }


}
//creo un singolo quadrato
function createSquare(divCont, index,diff){
    const square = document.createElement('div');
    const lineItems = Math.sqrt(diff);
    square.classList.add('box');
    square.style.width= `calc( 100% / ${lineItems})`;
    square.style.height= `calc( 100% / ${lineItems})`;
    square.innerText= index + 1;
    square.addEventListener('click', activeBox)
    divCont.append(square);
    function activeBox (){
        square.classList.add('active');
        console.log(`cella attivata: ${this.innerHTML}`);
    }
}

//creo un array di numeri casuali diversi
function bomber(){
    let bombs=[];
    let count=0;
    while(bombs.length<BOMB_NUM){
        let num = getRndInteger(1,difficulty);
        if (!bombs.includes(num)) {
            bombs.push(num);            
        }
    }
    return console.log(bombs);
}
bomber();








}





