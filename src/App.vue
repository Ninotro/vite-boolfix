<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from './components/AppHeader.vue';
import ListCard from "./components/ListCard.Vue"





export default {
  components: {
    AppHeader,
    ListCard
  },
  data () {
    return {
      store
    }
  },

  methods: {
    searchMovies() {
      let myUrl=store.apiUrl
      let moviesUrl=store.tvUrl

      if (store.searchQuery !== "") {
        myUrl += `=${store.searchQuery}`;
        moviesUrl +=`&query=${store.searchQuery}`;

        
      }
      axios.get(myUrl) 
       
    
      .then( res => {
        store.FilmList= res.data.results
        

      })
      .catch (err =>{
        console.log(err);
      });

      axios.get(moviesUrl)
      .then (res => {
        store.tvList=res.data.results
        console.log(moviesUrl);
      })
      .catch (err =>{
        console.log(err);
      });
    }
  },
  created() {
    this.searchMovies();
    
  }

 
  
}

</script>

<template>
 <header>
   <AppHeader @search="searchMovies"/>
 </header>
 <main>
  <ListCard/>
 </main>
</template>

<style lang="scss" >
@use "../src/styles/general.scss";
main {
  background-color: grey;
  
  
  padding-top: 100px;
}
</style>
