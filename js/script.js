const { createApp } = Vue;
   
createApp({
    data(){
        return{
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
                    text : 'Clicca la x in alto a destra',
                    done : false,  
                },
                {
                    text : 'Entra sulle impostazioni del profilo',
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
        }

    }
}).mount('#app')