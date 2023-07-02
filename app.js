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
   const playerSelection = "PAPERS";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));