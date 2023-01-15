<script>
    import CardList from './mini-componemts/CardList.vue'
    export default {
        components:{
            CardList
        }
    }
</script>
<template>
    <main >
        <div id="main-container" class="py-3">
            <!-- SELECT  -->
            <select class="form-select" aria-label="Default select example">
                <option value="1">Alien</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div id="content" class="bg-white">
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