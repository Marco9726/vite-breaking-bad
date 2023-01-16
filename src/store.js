import { reactive } from 'vue';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    cardsArray: [],
    // API per generare l'array dei vari archetipi 
    arcUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    arcArray: []
})