<script>
    export default {
        
    }
</script>
<template>
    <main class="w-100">
        <div id="main-container" class="py-3">
            <select class="form-select" aria-label="Default select example">
                <option value="1">Alien</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div id="content" class="bg-white">

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