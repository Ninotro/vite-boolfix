<script>
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
  }

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
}
</style>
