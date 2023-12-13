const { createApp } = Vue;
   
createApp({
    data(){
        return{
            listTesto :'',
            lista_do: [
                {
                   text : 'Apri il Client',
                   done : true,  
                },
                {
                    text : 'Inserisci le credenziali',
                    done : true,  
                },
                {
                    text : 'Effettua il Login',
                    done : true,  
                },
                {
                    text : 'Apri il gioco',
                    done : true,  
                },
                {
                    text : 'Chiudi il gioco',
                    done : false,  
                },
                {
                    text : 'Entra sulle impostazioni',
                    done : false,  
                },
                {
                    text : 'Clicca elimina account',
                    done : false,  
                },
                {
                    text : 'Disinstalla l app',
                    done : false,  
                },
                {
                    text : 'Vai a goderti la vita',
                    done : false,  
                },
            ]
           
       } 
    },
    methods:{
        eliminaLista(index){
            this.lista_do.splice(index,1)
        },
        aggiuntaLista(){
            let li ={
                text:this.listTesto,
                done: false,
            }
            this.lista_do.push(li)
            this.listTesto = ''
        }

    }
}).mount('#app')