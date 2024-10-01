//console.log("it works");



//programma che stampi i numeri da 1 a 100 --> utilizzare: for, let i = n ; i ">" o "<"" o ">=" o "<=" 100 (in questo caso inseriamo ">=") e con console.log stamperemo i numeri da 0 a 100;

//for ( let i = 0; i < 100 ; i++){ 
        //stamperemo i numeri}


//CONDIZIONI:
//per i multipli di 3 stampi “Fizz” 

//per i multipli di 5 stampi Buzz

// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
// --> possiamo inserire delle condizioni all'interno del for. In questo caso avremo bisogno di 3 condizioni: if(), else if(), else();

//individuare i multipli si può usare l'operatore % che calcola la divisione. Un numero è multiplo di 5 o di 3 qando il resto è 0.

//useremo l'operatore di uguaglianza ==

for ( let i = 0; i < 100 ; i++){
    console.log(i);
    
if (i % 3 === 0 && i % 5 === 0 ){ 
    console.log("FizzBuzz");
    
} else if (i % 5 == 0){
    console.log("Buzz");
    
} else if( i % 3 == 0){


    console.log("Fizz");
}
    
}