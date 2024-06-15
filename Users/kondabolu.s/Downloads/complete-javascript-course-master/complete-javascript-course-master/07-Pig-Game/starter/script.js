'use strict';
//1.Rolling Dice
// 1.Make dice invisible at starting
// 2.When you click on dice random number should be generated
// 3.If that random number is not 1 then add that value to current score
// 4.If it is 1 switch to another player

// getting references to the score elements for both players
const score0El=document.getElementById('score--0')
const score1El=document.getElementById('score--1')
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')

const newGameEl=document.querySelector('.btn--new')
const rollDiceEl=document.querySelector('.btn--roll')
const holdEl= document.querySelector('.btn--hold')
const diceEl=document.querySelector('.dice')
 


let score,currentScore, activePlayer, playing

const init = function () {
    score = [90, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = 1;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };


  init();

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).innerText=0
    currentScore=0
    activePlayer=activePlayer===0 ? 1 : 0
    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')

}
//roll dice method
rollDiceEl.addEventListener('click',function(){
//random number generation
if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden')
    diceEl.src=`dice-${dice}.png`
    if(dice!=1){
        currentScore+=dice
        // current0El.innerText=currentScore
        document.getElementById(`current--${activePlayer}`).innerText=currentScore
    }
    else{
        switchPlayer()
    
    }
}

})

//Hold method
holdEl.addEventListener('click',function(){
    if(playing){

        score[activePlayer]+=currentScore
        document.getElementById(`score--${activePlayer}`).innerText=score[activePlayer]
    
        if(score[activePlayer]<100){
            switchPlayer()
        }
        else{
          document.querySelector('.player').classList.add('player--winner')
          playing=0
          diceEl.classList.add('hidden')

    
        // document.getElementById(`score--{activePlayer}`).classList.add('')
        }
    }
})

// Reset method
newGameEl.addEventListener('click',init)