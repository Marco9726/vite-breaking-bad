<script>

    export default {
        props:{
            // prop passata da CardList.vue 
            card: 'object'
        }
    }
</script>

<template>
    <div class="myCard text-center mb-3">
        <!-- percorso per visualizzare l'immagine della carta  -->
        <img :src="card.card_images[0].image_url" :alt="card.name" class="w-100">
        <div id="card-descriptions" class="p-3">
            <h6 class="name text-white">
                {{ card.name }}
            </h6>
            <span>
                {{  card.archetype }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
  @use '/src/scss/partials/variables' as *;

  .myCard{
    width: calc(100% / 5 - 1rem);
    background-color: $brown-primary;
    
    .name{
        text-transform: uppercase;
    }
  }
    
</style>