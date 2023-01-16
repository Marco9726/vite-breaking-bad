<script>
    import CardList from './mini-componemts/CardList.vue'
    import AppSelect from './mini-componemts/AppSelect.vue'
    export default {
        components:{
            CardList,
            AppSelect
        }
    }
</script>
<template>
    <main >
        <div id="main-container" class="py-4">
            <!-- SELECT  -->
            <AppSelect />
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