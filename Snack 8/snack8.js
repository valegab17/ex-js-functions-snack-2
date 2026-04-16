/* Crea una funzione che simula un conto alla rovescia

    Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */


    //scrivo la funzione contoallarovescia
    function contoAllaRovescia(n){   //qua ho definito il valore n
        //metto un let 
        let timer = setInterval(()=>{
            //se il valore è maggiore di 0 allora tolgo 1 a n 
            if (n > 0){
                console.log(n);
                //eseguo tolgo un secondo 
                n--;   
            } else{
                //Se invece n è = a 0 allora stampo in console la scritta "Tempo Scaduto!"
                console.log("Tempo Scaduto!")
                //e fermo il loop con clearInterval
                clearInterval(timer);
            }

        }, 1000) //imposto che ogni secondo decrementa di uno
    }
    contoAllaRovescia(5)
   