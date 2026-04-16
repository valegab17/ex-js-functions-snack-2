/* SNACK 1 
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

/* CREO LA FUNZIONE DICHIARATIVA SOMMA */
function somma(num1,num2){
    return num1 + num2


};

console.log(somma(29,41) );

/* CREO LA FUNZIONE ANONIMA */
const sommaAnonima = function(num1,num2){

    return num1 + num2 
};

console.log(sommaAnonima(43,85))


/* CREO LA ARROW FUNCTION */

const arrowFunction = (num1,num2)=>{
    return num1 + num2
}

console.log(arrowFunction(48,27))

/* Creo la arrowfunction sintetica */

const sintetico = (num1,num2)=> num1 + num2;

console.log(sintetico(38,102));
