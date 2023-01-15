<script>
  import axios from 'axios';
  import AppHeader from './components/AppHeader.vue';
  import AppContent from './components/AppContent.vue'
  export default {
    components:{
      AppHeader,
      AppContent
    },
    data(){
      return{
        cardArray: [],
        url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien"
      }
    },
    created(){
      this.getCards()
    },
    methods:{
      getCards(){
        axios.get(this.url).then((response) => {
          console.log(response.data.data);
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