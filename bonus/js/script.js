



campoMinato();

function campoMinato() {
    let difficulty = 0;
    //costante bombe
    const BOMB_NUM = 16;
    //array bombe;
    let bombsCell;
    //punteggio
    let score = 0;
    let gameOver;
    // prendo il container #playground
    const divPlayground = document.getElementById('playground');
    //prendo il div result
    const divResult = document.getElementById('result');
    const spanResult = document.createElement('span');
    //prendo il bottone
    const btnPlay = document.getElementById('play-btn');

    //aggiungo listener
    btnPlay.addEventListener('click', playGame);


    //funzione on click
    function playGame() {
        // gameOver = null;
        // score = 0;
        // spanResult.innerHTML='';
        // divResult.classList.remove('alert-danger');
        // divResult.classList.remove('alert-success');
        resetGround();



        divPlayground.innerHTML = '';
        //prendo input difficoltà
        // prendo il valore della select difficoltà
        const selectDiff = document.getElementById('difficulty');
        
        //variabile difficoltà

        if (selectDiff.value === 'easy') {
            difficulty = 100;
        } else if (selectDiff.value === 'medium') {
            difficulty = 81;
        } else if (selectDiff.value === 'hard') {
            difficulty = 49;
        }
        

        //creo le bombe
        bombsCell = bomber();
        

        for (let i = 0; i < difficulty; i++) {
            // creo singolo quadrato
            createSquare(divPlayground, i, difficulty);

        }
        // console.log('Il tuo punteggio è:' + score);
        //     if (gameOver) {
        //         bombDefuse();
        //         neverClick(activeBox);

        //     }







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
            //prendo la griglia creata
            //const gridGround = divPlayground;
            if (gameOver || score === (difficulty - BOMB_NUM)) {
                //console.log(gridGround);
                // neverClick(activeBox);

                this.removeEventListener('click', activeBox);
                

            }
            this.removeEventListener('click', activeBox);
            const numSelCell = parseInt(this.innerHTML);
            
            if (!bombsCell.includes(numSelCell) && !gameOver) {
                this.classList.add('active');
                score++;
                
            } else {
                //bomberInstaller();
                // this.classList.add('bomb');
                // this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                gameOver = true;
                


            }
            

            if (gameOver) {
                bombDefuse();
                neverClick(activeBox);

            }
            //stampo risultato
            printResult();
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
        //console.log(this);
        this.classList.add('bomb');
        this.innerHTML = `<i class="fa-solid fa-bomb"></i>`
    }

    // rimuvo listener da tutti le celle
    function neverClick(activeBox) {
        for (let index = 0; index < divPlayground.length; index++) {
            const element = divPlayground[index];
            element.removeEventListener('click', activeBox);

        }
    }
    // bombe scoperte
    function bombDefuse() {
        const divCell = divPlayground.getElementsByClassName('box');

        for (let index = 0; index < divCell.length; index++) {
            const element = index + 1;
            if (bombsCell.includes(element)) {
                divCell[index].classList.add('bomb');
                divCell[index].innerHTML = `<i class="fa-solid fa-bomb"></i>`;

            }


        }
        


    }
    //stampare risultato
    function printResult() {
        // spanResult.innerHTML='';
        divResult.append(spanResult);
        let msgWin = 'Hai Vinto!!!'
        let msgLose = 'Hai perso.'
        let yourScore = 'Questo è il tuo punteggio: '
        let alertCol;

        if (!gameOver && difficulty - BOMB_NUM === score) {
            spanResult.innerHTML = msgWin + yourScore + score;
            alertCol = 'alert-success';


        } else if (gameOver) {
            spanResult.innerHTML = msgLose + yourScore + score;
            alertCol = 'alert-danger';

        } else {
            spanResult.innerHTML = yourScore + score;
        }
        divResult.classList.add(alertCol);
        // divResult.append(spanResult);
    }

    //reset ground
    function resetGround(){
        gameOver = null;
        score = 0;
        spanResult.innerHTML='';
        divResult.classList.remove('alert-danger');
        divResult.classList.remove('alert-success');
    }






}

