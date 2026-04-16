/* Crea un generatore di funzioni creaTimer

    Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
 */
function creaTimer(ms){
    return ()=>{
        setTimeout(()=>{
            console.log("Tempo Scaduto!")
        }, ms)

    };
}

const parteTimer = creaTimer(2000)
console.log("Timer partito")
parteTimer();