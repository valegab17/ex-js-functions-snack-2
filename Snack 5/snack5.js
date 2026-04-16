/* 
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. */
/* const elemento = document.getElementById("ziamarica");

function stampaOgniSecondo() { 
    return setInterval(() => {
        elemento.innerHTML += "ZIAMARICA"; 
    }, 200);
}

stampaOgniSecondo(); */

function stampaOgniSecondo(saluto){
    setInterval(() => {
        console.log(saluto)
        
    }, 200);
}

stampaOgniSecondo("Ciao!")