/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
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
                }
            ]
            
        };
    },
    methods: {
        addToList(index) {
            if(this.work[index].davvero == true ){
                console.log(this.work[index].compiti, index)
                this.index ++;
                
            }
            else if(this.work[index].davvero == false ){
                console.log(index)
                this.index ++;
                return 'barrato'
            }
           
            
        }
    }
}).mount('#app');
