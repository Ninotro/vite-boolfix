<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from './components/AppHeader.vue';
import ListCard from "./components/ListCard.vue";





export default {
  components: {
    AppHeader,
    ListCard,
    
    
  },
  data () {
    return {
      store
    }
  },
  methods: {
    getFilm() {
      axios.get(store.apiUrl)
      .then(res => {
        store.FilmList = res.data.results
        store.loading = false
       
      })
      .catch(err => {
        console.log(err);
      })
      


      
    },

  },
  created() {
    this.getFilm();
    
   
    

  },
}
  


</script>

<template>
 <header>
   <AppHeader/>
 </header>
 <main>
  <ListCard/>
 </main>
</template>

<style lang="scss" >
@use "../src/styles/general.scss";
main {
  background-color: grey;
  height: 1000px;
  flex: 1;
  padding-top: 100px;
}
</style>
