<script>
import { store } from "../store.js";
import SingleCard from "./SingleCard.vue"
import tvCard from "./tvCard.vue"

export default {
    components : {
       SingleCard,
       tvCard
    },
 
 name :"ListCard",

 data() {
    return {
        store
    }
 }


}


</script>

<template>

    <section>
      <h2>FILM:</h2>
      <div class="container">
         <SingleCard
         v-for="film in store.FilmList"
         :details="film" 
         />
      </div>
      <h2>SERIE TV:</h2>
      <div class="container">
         <tvCard
         v-for="tvShow in store.tvList"
        :key="tvShow.id"
        :series="tvShow"
         />
      </div>
       
      

    </section>    
    
   
 </template>

<style lang="scss" scoped>
@use "../src/styles/general.scss";

h2 {
   font-size: 50px;
   font-weight: bold;
   color: white;
   margin-bottom: 30px;
   margin-top: 30px;
}
.container {
    
    
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
   
}

</style>
