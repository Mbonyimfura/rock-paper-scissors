const getComputerChoice=()=>{
   const choices=['rock','paper','scissors']
   const randomIndex=Math.floor(Math.random()*choices.length);
   return choices[randomIndex]

}

//function to play single round
 const playRound=(playerSelection,computerSelection)=>{
playerSelection=playerSelection.toLowerCase();

if(playerSelection===computerSelection){
    return 'Its a tie'
}
if(playerSelection==='rock'){
    if(computerSelection==='paper'){
        return 'You lose! Paper beats rock!'
    }else{
        return 'You win! Rocks beats scissors!'
    }
}
if(playerSelection==='paper'){
    if(computerSelection==='scissors'){
        return 'You lose! Scissors beats paper'
    }else{
        return 'You win! Paper beats rock!'
    }
}
if(playerSelection==='scissors'){
    if(computerSelection==='rock'){
        return 'You lose!rock beats scissors'
    }else{
        return 'You win!scissors beats paper!'
    }
}
return 'Invalid choice! Please choose rock,paper,scissors'

   }

   //function to play 5 round
   const game=()=>{
    let playerScore=0;
    let computerScore=0;
    for(let round=1;round<=5;round++){
      const  playerSelection=prompt('enter your choice(rock,paper,scissors):')
     const  computerSelection=getComputerChoice()
      console.log(`round ${round}:`)  
      console.log(`player chooses ${playerSelection}:`)
      console.log(`computer chooses ${computerSelection}:`)

      const result=playRound(playerSelection,computerSelection);
      console.log(result)

      if(result.startsWith('You win')){
        playerScore++
      }else if(result.startsWith('You lose')){
        computerScore++
      }
    }
console.log('Game over!');
console.log(`Player score:${playerScore}`)
console.log(`Computer score:${computerScore}`)
if(playerScore>computerScore){
    console.log(`You win the game`)
}else if(playerScore<computerScore){
    console.log(`Computer win the game`)
}else{
    console.log(`It's a tie`)
}
   }
   //start the game
   game()
