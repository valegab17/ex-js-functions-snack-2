/* Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */

const sottrai  = (n1,n2) => n1 - n2;
const dividi = (n1,n2) => n1 / n2;

const eseguiOperazione = (n1, n2, operazione) => {operazione(n1,n2);

}

console.log(eseguiOperazione(12,5, sottrai));
console.log(eseguiOperazione(293,7,dividi));