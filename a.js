const newGame=document.querySelector('.newGame');
const player1CurrentScoer = document.querySelector('.player1CurrentScoer');
const player2CurrentScoer = document.querySelector('.player2CurrentScoer');
const hold=document.querySelector('.hold');
const player1TScoer=document.querySelector('.player1TScoer');
const player2TScoer=document.querySelector('.player2TScoer');
const dice = document.querySelector('.dice');
const container=document.querySelector('.container');
const p1Text = document.querySelector('.p1Text');
const p2Text = document.querySelector('.p2Text');

const one =document.querySelector('.one');
const two =document.querySelector('.two');
const three =document.querySelector('.three');
const four =document.querySelector('.four');
const five =document.querySelector('.five');
const six =document.querySelector('.six');
const seven =document.querySelector('.seven');

newGame.addEventListener('click', newGameFunction);
hold.addEventListener('click' , holdFunction);
dice.addEventListener('click', diceFunction);

let randomNumber;
let currentTotal=0;
let player1HoldValue=0;
let player2HoldValue=0;

function newGameFunction()
{

player1CurrentScoer.textContent=0;
player2CurrentScoer.textContent=0;
player1TScoer.textContent=0;
player2TScoer.textContent=0;
currentTotal=0;
player1HoldValue=0;
player2HoldValue=0;
p2Text.textContent='player 2';
p1Text.textContent='player 1'
   
   //styles
p1Text.style.color='red';
p2Text.style.color='black';



}

function diceFunction()
{
   randomNumber=Math.trunc((Math.random()*6)+1);

   console.log(randomNumber);

// -------------------------



if(randomNumber==1)
    {
        one.classList.add('one');
        two.classList.remove('two');
        three.classList.remove('three');
        four.classList.remove('four');
        five.classList.remove('five');
        six.classList.remove('six');
        seven.classList.remove('seven');

        
    }
    else if(randomNumber==2)
    {


        one.classList.remove('one');
        two.classList.remove('two');
        three.classList.remove('three');
        four.classList.add('four');
        five.classList.add('five');
        six.classList.remove('six');
        seven.classList.remove('seven');

               
    }

    else if(randomNumber==3)
    {


        one.classList.add('one');
        two.classList.remove('two');
        three.classList.remove('three');
        four.classList.add('four');
        five.classList.add('five');
        six.classList.remove('six');
        seven.classList.remove('seven');

    }

    else if(randomNumber==4)
    {

        one.classList.remove('one');
        two.classList.add('two');
        three.classList.remove('three');
        four.classList.add('four');
        five.classList.add('five');
        six.classList.remove('six');
        seven.classList.add('seven');

}

else if(randomNumber==5)
{

    one.classList.add('one');
    two.classList.add('two');
    three.classList.remove('three');
    four.classList.add('four');
    five.classList.add('five');
    six.classList.remove('six');
    seven.classList.add('seven');        


}

else if(randomNumber==6)
{
    
    
    one.classList.remove('one');
    two.classList.add('two');
    three.classList.add('three');
    four.classList.add('four');
    five.classList.add('five');
    six.classList.add('six');
    seven.classList.add('seven');

    

}


//----------------------


if(randomNumber==1)
{
   currentTotal=0;
   
    if(p1Text.style.color=='red')
   {
      player1CurrentScoer.textContent=currentTotal;
      //styles
      player1CurrentScoer.style.color='red';
      p2Text.style.color='red';
      p1Text.style.color='black';
      
   }
   else if(p2Text.style.color=='red')
   {
      player2CurrentScoer.textContent=currentTotal;
      //styles
      player2CurrentScoer.style.color='red';
      p2Text.style.color='black';
      p1Text.style.color='red';

   }
 

}
else 

{
   //currentTotal=0;
   currentTotal+=Number(randomNumber);

    if(p1Text.style.color=='red')
   {
      player1CurrentScoer.textContent=currentTotal;
    
   }
   else if(p2Text.style.color=='red')
   {
      player2CurrentScoer.textContent=currentTotal;
    }

   //styles
   player1CurrentScoer.style.color='black';
   player2CurrentScoer.style.color='black';


}

}

function holdFunction()
{
  
   //holdValue=0;
   
   if(p1Text.style.color=='red')
{
   player1HoldValue+=currentTotal;
   player1TScoer.textContent=player1HoldValue;
   p1Text.style.color='black';
   p2Text.style.color='red';
   
   if(player1HoldValue==20)
   {
      p1Text.textContent='Player 1 win!';
      p1Text.style.color='green';
   }
   else if(player1HoldValue>20)
   {
      p2Text.textContent='Player 2 Win!';
      p2Text.style.color='green';
      }

      player1CurrentScoer.textContent=0;
}
else if(p2Text.style.color=='red')
{
   player2HoldValue+=currentTotal;
   player2TScoer.textContent=player2HoldValue;
   p1Text.style.color='red';
   p2Text.style.color='black';

   if(player2HoldValue==20)
   {
      p2Text.textContent='Player 2 win!';
      p2Text.style.color='green';
   }
   else if(player2HoldValue>20)
   {
      p1Text.textContent='Player 1 Win!';
      p1Text.style.color='green';
   }

   player2CurrentScoer.textContent=0;
   
}
currentTotal=0;




}