
campoMinato();

function campoMinato() {

    // costante difficoltà
    const difficulty = 100;
    //costante bombe
    const BOMB_NUM = 16;
    //array bombe;
    let bombsCell;

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
        for (let i = 0; i < difficulty; i++) {
            // creo singolo quadrato
            createSquare(divPlayground, i, difficulty);

        }




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
            const numSelCell = parseInt(this.innerHTML);
            console.log(numSelCell);
            if (!bombsCell.includes(numSelCell)) {
                this.classList.add('active');
                console.log(`cella attivata: ${this.innerHTML}`);
            } else {
                //bomberInstaller();
                this.classList.add('bomb');
                this.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
            }


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





