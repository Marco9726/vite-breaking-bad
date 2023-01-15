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
    <div>
        Found {{ store.cardsArray.length }} cards
    </div>
</template>

<style lang="scss">
    
</style>