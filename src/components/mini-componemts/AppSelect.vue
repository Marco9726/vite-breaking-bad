<script>
    import { store } from '../../store.js';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>
<template lang="">
    <!-- SELECT  -->                           <!-- v-model per passare il valore della option selezionata--> <!-- emit collegata ad AppContent-->
    <select class="form-select ms-2 mb-4" aria-label="Default select example" v-model="store.selectedArc" @change="$emit('changeArc')">
        <!-- ciclo gli archetipi per generare le option per ognuno di essi  -->
        <option v-for="(item,index) in store.arcArray" :key="index">{{ item.archetype_name }}</option>
    </select>
</template>
<style lang="scss">
    
</style>