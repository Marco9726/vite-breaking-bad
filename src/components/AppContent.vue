<script>
    import axios from 'axios';
    import CardList from './mini-componemts/CardList.vue'
    import AppSelect from './mini-componemts/AppSelect.vue'
      // importo il file STORE 
    import { store } from '../../src/store.js';
    export default {
        components:{
            CardList,
            AppSelect
        },
        data(){
            return{
                store
            }
         },
        created(){
            this.getCards()
        },
        methods:{
            getCards(){
                // compongo l'endpoint della chiamata con la base dell'url in store + l'archetipo selezionato nella select 
                let myUrl= store.url+'?archetype='+`${store.selectedArc}`;
                console.log(myUrl);
                // chiamata axios per generare la lista delle carte con il myUrl
                axios.get(myUrl).then((response) => {
                    // assegno l'array ottenuto dalla chiamata alla proprietà 'cardsArray' del file STORE 
                    store.cardsArray = response.data.data;
                })
                //seconda chiamata per generare le options nella select
                axios.get(store.arcUrl).then((response) => {
                    // assegno l'array ottenuto dalla chiamata alla proprietà 'arcArray' del file STORE 
                    store.arcArray = response.data;
                })
            }
        }
    }
</script>
<template>
    <main >
        <div id="main-container" class="py-4">
            <!-- SELECT  --> <!--emit collegata al @change di AppSelect che richiama la funzione per generare le carte-->
            <AppSelect @changeArc="getCards" />
            <div id="content" class="bg-white p-5">
                <!-- inserisco la componente CardList  -->
                <CardList/>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
  @use '../scss/partials/variables' as *;

    main{
        background-color: $brown-primary;
        #main-container{
            width: 85%;
            margin: 0 auto;
            select{
                width: 15%;
            }

        }
    }
</style>