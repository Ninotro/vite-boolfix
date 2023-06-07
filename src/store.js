import { reactive } from "vue"

export const store = reactive ({
    urlArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    characterList:[],
    loading:true,
    archetypeList :[]
});