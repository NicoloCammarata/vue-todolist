/*
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            newWork:[
                {
                    compiti: ' ',
                }
            ],
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
        addToList(i) {
            if(this.work[i].davvero == true ){
                this.i ++;
                return ''
                
            }
            else if(this.work[i].davvero == false ){

                this.i ++;
                return 'barrato'
            }
           
            
        },
        
        removeToList(i) {
            console.log(i, this.work[i].compiti)
            this.work.splice(i, 1).compiti
            
           
            
        },
        addWork(){
            console.log(this.newWork[0].compiti)
            this.work.push(this.newWork[0])
            this.newWork[0]= ''
            
            
        }
    }
}).mount('#app');
