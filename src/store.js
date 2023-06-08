import { reactive } from "vue"

export const store = reactive ({
    
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e530954ed9cd53884d74d2520627fe83&query",
    tvUrl: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT',
    FilmList:[],
    loading:true,
    archetypeList :[],
    searchQuery:"",
    ApiParameters:"",
    voteAverage: 0,
    tvList : []
});