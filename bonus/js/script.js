



campoMinato();

function campoMinato() {
    let difficulty=0;
    //costante bombe
    const BOMB_NUM = 16;
    //array bombe;
    let bombsCell;
    //punteggio
    let score = 0;
    let gameOver;


    //prendo il bottone
    const btnPlay = document.getElementById('play-btn');
    //aggiungo listener
    btnPlay.addEventListener('click', playGame);


    //funzione on click
    function playGame() {
        gameOver=null;
        // prendo il container #playground
        const divPlayground = document.getElementById('playground');
        divPlayground.innerHTML = '';
        //prendo input difficoltà
        // prendo il valore della select difficoltà
        const selectDiff = document.getElementById('difficulty');
        console.log(selectDiff.value);
        //variabile difficoltà
        
        if (selectDiff.value=== 'easy') {
            difficulty = 100;
        } else if (selectDiff.value=== 'medium'){
            difficulty = 81;
        } else if (selectDiff.value=== 'hard'){
            difficulty = 49;
        }
        console.log(difficulty);

        //creo le bombe
        bombsCell = bomber();
        console.log(bombsCell)

        for (let i = 0; i < difficulty; i++) {
            // creo singolo quadrato
            createSquare(divPlayground, i, difficulty);

        }
        //prendo la griglia creata
        const gridGround = divPlayground.innerHTML;






    }

    // FUNZIONI


    //creo un singolo quadrato
    function createSquare(divCont, index, diff) {
        const square = document.createElement('div');
        const lineItems = Math.sqrt(diff);
        square.classList.add('box');
        square.style.width = `calc( 100% / ${lineItems})`;
        square.style.height = `calc( 100% / ${lineItems})`;
        square.innerText = index + 1;
        square.addEventListener('click', activeBox)
        divCont.append(square);
        function activeBox() {
            if (gameOver || score === (difficulty - BOMB_NUM)) {
                this.removeEventListener('click', activeBox);
                console.log('Il gioco è terminato! Questo è il tuo Punteggio: ' + score);
                return
            }
            this.removeEventListener('click', activeBox);
            const numSelCell = parseInt(this.innerHTML);
            console.log(numSelCell);
            if (!bombsCell.includes(numSelCell)) {
                this.classList.add('active');
                score++;
                console.log(`cella attivata: ${this.innerHTML}`);
            } else {
                //bomberInstaller();
                this.classList.add('bomb');
                this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                gameOver = true;
            }
            console.log('Il tuo punteggio è:' + score);

        }
    }

    //creo le bombe
    function bomber() {
        //creo un array di numeri casuali diversi
        let bombs = [];
        let count = 0;
        while (bombs.length < BOMB_NUM || count > 200) {
            let num = getRndInteger(1, difficulty);
            if (!bombs.includes(num)) {
                bombs.push(num);
            } count++
        }
        return bombs;
    }
    //installo le bombe nel campo
    function bomberInstaller() {
        console.log(this);
        this.classList.add('bomb');
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`
    }



    //bomba
    // <i class="fa-solid fa-bomb"></i>




}




/*


campoMinato();
function campoMinato(){

//costante bombe
const BOMB_NUM = 16;
//array bombe;
let bombsCell;
//punteggio
let score = 0;
let gameOver;

//prendo il bottone
const btnPlay = document.getElementById('play-btn');
//aggiungo listener
btnPlay.addEventListener('click', playGame);
//funzione on click
function playGame() {
    // prendo il container #playground
    const divPlayground = document.getElementById('playground');
    divPlayground.innerHTML = '';
     //creo le bombe
     bombsCell = bomber();
     console.log(bombsCell)
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
    
   

    for (let i = 0; i < difficulty; i++) {
        // creo singolo quadrato
        createSquare(divPlayground, i, difficulty);

    }
     //prendo la griglia creata
     const gridGround = divPlayground.innerHTML;


}
// function createSquare(divCont, index, diff) {
//     const square = document.createElement('div');
//     const lineItems = Math.sqrt(diff);
//     square.classList.add('box');
//     square.style.width= `calc( 100% / ${lineItems})`;
//     square.style.height= `calc( 100% / ${lineItems})`;
//     square.innerText = index + 1;
//     square.addEventListener('click', activeBox)
//     divCont.append(square);
//     function activeBox() {
//         square.classList.add('active');
//         console.log(`attivata cella numero: ${this.innerHTML}`);
//     }
// }


    // FUNZIONI


    //creo un singolo quadrato
    function createSquare(divCont, index, diff) {
        const square = document.createElement('div');
        const lineItems = Math.sqrt(diff);
        square.classList.add('box');
        square.style.width = `calc( 100% / ${lineItems})`;
        square.style.height = `calc( 100% / ${lineItems})`;
        square.innerText = index + 1;
        square.addEventListener('click', activeBox)
        divCont.append(square);
        function activeBox() {
            if (gameOver || score === (difficulty - BOMB_NUM)) {
                this.removeEventListener('click', activeBox);
                console.log('Il gioco è terminato! Questo è il tuo Punteggio: ' + score);
                return
            }
            this.removeEventListener('click', activeBox);
            const numSelCell = parseInt(this.innerHTML);
            console.log(numSelCell);
            if (!bombsCell.includes(numSelCell)) {
                this.classList.add('active');
                score++;
                console.log(`cella attivata: ${this.innerHTML}`);
            } else {
                //bomberInstaller();
                this.classList.add('bomb');
                this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                gameOver = true;
            }
            console.log('Il tuo punteggio è:' + score);

        }
    }

    //creo le bombe
    function bomber() {
        //creo un array di numeri casuali diversi
        let bombs = [];
        let count = 0;
        while (bombs.length < BOMB_NUM || count > 200) {
            let num = getRndInteger(1, difficulty);
            if (!bombs.includes(num)) {
                bombs.push(num);
            } count++
        }
        return bombs;
    }
    //installo le bombe nel campo
    function bomberInstaller() {
        console.log(this);
        this.classList.add('bomb');
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`
    }


}
*/



