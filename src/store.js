import { reactive } from "vue"

export const store = reactive ({
    
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e530954ed9cd53884d74d2520627fe83",
    FilmList:[],
    loading:true,
    archetypeList :[]
});