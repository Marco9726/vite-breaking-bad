<script>
    // importo il file STORE 
    import { store } from '../../store.js';
    // importo la Card 
    import Card from './Card.vue';
    export default {
        components:{
            Card
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div id="heading" class="text-white p-3">
        <!-- visualizzo il numero delle carte trovate  -->
        Found {{ store.cardsArray.length }} cards
    </div>
    <div id="cards-container" class="d-flex justify-content-between flex-wrap">
        <!-- ciclo le carte nel loro array  --> <!-- passo la prop oggetto 'card' che utilizzerò in Card.vue-->
        <Card v-for="(item,index) in store.cardsArray" :key="index" :card="item" />
    </div>
</template>

<style lang="scss">
    
    #heading{
        background-color: rgb(15,15,15);
    }
</style>