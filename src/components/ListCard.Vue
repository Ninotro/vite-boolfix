<script>
import SingleCard from "./SingleCard.Vue"

export default {
    components : {
        SingleCard
    },
 
 name :"ListCard"


}


</script>

<template>

    <section>
        <SingleCard v-for="film in store.FilmList" 
        :details="film"/>
    </section>    
    
   
 </template>

<style lang="scss" scoped>
@use "../src/styles/general.scss";




</style>
