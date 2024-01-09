/*
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            index: 0,
            work: [
                {
                    compiti: 'fare i compiti',
                    davvero: true
                },
                {
                    compiti: 'fare la spesa',
                    davvero: false
                },
                {
                    compiti: 'fare il bucato',
                    davvero: true
                },
                
            ],
            
            
        };
    },
    methods: {
        /*addToList(index) {
            if(this.work[index].davvero == true ){
                this.index ++;
                
            }
            else if(this.work[index].davvero == false ){

                this.index ++;
                return 'barrato'
            }
           
            
        },*/
        
        removeToList(i) {
            console.log(i, this.work[i].compiti)
            this.work.splice(i, 1).compiti
            
           
            
        }
    }
}).mount('#app');
