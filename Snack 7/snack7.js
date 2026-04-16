/* Crea una funzione che ferma un timer dopo un certo tempo

    Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */

function eseguiEferma(messaggio, intervallo, durata) {
    const intervalId =setInterval(() => {
        
        console.log(messaggio);


    }, intervallo)

    setTimeout(()=>{
        //ora devo interrompere l'intervallo
        clearInterval(intervalId);  
        console.log("Ho fermato il timer")
    }, durata)
}

eseguiEferma('Sto eseguendo...', 1000, 5000)