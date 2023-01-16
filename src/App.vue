<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppContent from './components/AppContent.vue';
    // importo il file STORE 
  import { store } from '../src/store.js';
  export default {
    components:{
      AppHeader,
      AppContent
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
        // chiamata axios 
        axios.get(store.url).then((response) => {
          // assegno l'array ottenuto dalla chiamata alla proprietà 'cardsArray' del file STORE 
          store.cardsArray = response.data.data;
        })
        //seconda chiamata
        axios.get(store.arcUrl).then((response) => {
          // assegno l'array ottenuto dalla chiamata alla proprietà 'arcArray' del file STORE 
          store.arcArray = response.data;
        })
      }
    }
  }
</script>

<template>
  <AppHeader/>
  <AppContent/>
</template>

<style lang="scss">
  @use './scss/generals.scss' as *;
  
</style>