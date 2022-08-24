//Eu quero jogar .0
//Eu quero que o meu inimigo jogue .1
//Eu quero que a opacidade da imagem diminua ao decorrer do jogo, para uma melhor experiência .2
//Eu quero uma validação de vitoria .3
//Quero que o jogo rode .4
//Queremos que mostre o resultado em uma modal .5
var opts = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

//Minha jogada .0

function playerPlay() {
    for (let i = 0; i < opts.length; i++) {
        var optsPlayer = opts[i];
        optsPlayer.addEventListener('click', (e) => {
            resetOpacityP();
            e.target.style.opacity = 1;
            playerOpt = e.target.getAttribute('opt');
            //Fiz a minha jogada!
            //Agora jogada do inimigo
            /* Tenho que colocar o enemyPlay aqui, pois se eu colocar fora o inimigo jogará apenas uma vez,
            já que, para que aconteça o jogo eu preciso clicar na opstPlayer (evento de click), se eu deixasse o enemyPlay
            de fora so iria carregar uma vez a jogada do inimigo, o que não é o desejado.*/
            enemyPlay();
            //A mesma coisa do enemy play para o validateVictory
            validateVictory();
        })
        
    }
    }

//Jogada do inimigo .1

function enemyPlay() {
    let rand = Math.floor(Math.random()*3); 
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetOpacityE();
    for (let i = 0; i < enemyOptions.length; i++) {
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
        
    }
}


//Reseta opacidade da imagem da jogada do player . 2
function resetOpacityP () {
    for(var i = 0; i < opts.length; i++){
        opts[i].style.opacity = 0.3;
    }
}

//Reseta opacidade da imagem da jogada do advesário . 2
function resetOpacityE () {
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for (let i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
        
    }
}

function validateVictory () {
    let jogada = document.querySelector('.jogada');
    let vencedor = document.querySelector('.vencedor');
    let modal = document.querySelector('.modal');
    if(playerOpt == "papel"){
        if(enemyOpt == "papel"){
            Modal();
            jogada.innerHTML = "Quase! Escolha sua jogada novamente";
            vencedor.innerHTML = "O jogo foi empatado";
        }else if(enemyOpt == "tesoura"){
            Modal();
            jogada.innerHTML = "Você perdeu!  Escolha sua jogada novamente";
            vencedor.innerHTML = "O inimigo ganhou";       
        }else if(enemyOpt == "pedra"){
            Modal();
            jogada.innerHTML = "Parabéns!";
            vencedor.innerHTML = "Você ganhou";
            
        }


    }


    if(playerOpt == "tesoura"){
        if(enemyOpt == "papel"){
            Modal();
            jogada.innerHTML = "Parabéns!";
            vencedor.innerHTML = "Você ganhou";
            
        }else if(enemyOpt == "tesoura"){
            Modal();
            jogada.innerHTML = "Quase! Escolha sua jogada novamente";
            vencedor.innerHTML = "O jogo foi empatado";
            
        }else if(enemyOpt == "pedra"){
            Modal();
            jogada.innerHTML = "Você perdeu!  Escolha sua jogada novamente";
            vencedor.innerHTML = "O inimigo ganhou";
            
        }


    }

    if(playerOpt == "pedra"){
        if(enemyOpt == "papel"){
            Modal();
            vencedor.innerHTML = "O inimigo ganhou";
            jogada.innerHTML = "Você perdeu! Escolha sua jogada novamente";
        }else if(enemyOpt == "tesoura"){
            vencedor.innerHTML = "Você ganhou";
            jogada.innerHTML = "Parabéns!";
        }else if(enemyOpt == "pedra"){
            Modal();
            vencedor.innerHTML = "O jogo foi empatado";
            jogada.innerHTML = "Quase! Escolha sua jogada novamente";
            
        }


    }
}



//Jogo . 4
function game (){
    //Na verdade o player play é o onde o jogo acontece.
    playerPlay();
}

//Modal .5

function Modal (){
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    const close = document.querySelector('.modal i');
    close.addEventListener('click', function(){
        modal.style.display = 'none';
    })
}





game();

//Todos os getAttribute poderiam ser substituidos por querySelector ou getElementById, mas para isso é preciso que no HTML também mude!