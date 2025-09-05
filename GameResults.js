import react from "react";

function GameResult({secretNum, term}) {
   let result;

   if(term) {

   if( term > secretNum ){
    result = 'Higher';
   }
   else if ( term < secretNum ){
    result = 'Lower';
   }
   else if( term == secretNum) {
    result = 'Yipee! correct';
   }
   else {
    result = 'Enter Valid Input'
   }
}
      
   return(
        <h3>You Guessed: {result}</h3>
      )
}

export default GameResult;