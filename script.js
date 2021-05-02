var gameboard = document.querySelector('#gameboard');
var boardSize;
var rand; 
var block;
var score=0;
var turnTimer;
var previousRand = 'uuu';



document.getElementById('startGame').addEventListener('click', () => {
    document.querySelector('.preferences').classList.add('none');
    document.querySelector('.gameboard').classList.remove('none');

    boardSize = document.querySelector('#boardSize').value;
    for (let i = 1; i <= boardSize; i++) {
        div = document.createElement('div');
        div.dataset.id = i;
        div.classList.add('block');
        gameboard.append(div);
    }
    document.querySelectorAll('.block').forEach(block => {
        size = 100/Math.sqrt(boardSize); 
        block.style.height = size + '%';
        block.style.width = size + '%';
    });
    nextTurn();
   
})

gameboard.addEventListener('click', (el)=>{
    //el pour élement, c'est un objet. Une fonction anonyme qui prend comme argument un objet
    //.target c'est une méthode pour donner l'élement html sur quoi je clique avec Eventlistener
    el = el.target;
    // el.classList.contains('image')
    // el == block
    // el.dataset.id == rand
    if (el.classList=='block taupe') {
        score++;
    } else {
        score--;
    }
    document.querySelector('#score').innerHTML = score;
    nextTurn();
})

function nextTurn(){
    //on vérifie si on a déjà créé un block (à partir de ligne.42)
    clearInterval(turnTimer);
    turnTimer= setInterval(nextTurn, 30000);
    if(block){
        block.classList.remove('taupe');
    }
   rand = Math.floor(Math.random()*boardSize)+1;
   // Pour éviter d'avoir 2 fois la même case d'affilé
    // while (rand == previousRand) {
    //     rand = Math.floor(Math.random()*boardSize) + 1;
    // }
    // previousRand = rand;
   block = document.querySelector(`[data-id="${rand}"]`);
   block.classList.add('taupe');
//    document.querySelector('[data-id="'+rand+'"]');
}
