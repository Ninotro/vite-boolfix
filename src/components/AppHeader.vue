<script>
import { store } from "../store.js";
export default {
 
 name : "AppHeader",

 data() {
    return {
        store,
        
    }
 }


}


</script>

<template>
  <div id="container-header">
    <div>BOOLFIX</div>
    <div>
      <input type="text" v-model.trim="store.searchQuery" placeholder="Inserisci il nome del film" />
      <button @click="$emit('search')">Cerca</button>
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
@use "../src/styles/general.scss";

#container-header {
  height: 250px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    color: red;
    font-size: 50px;
    margin-left: 50px;
  }

  div {
    input {
    color: black;
   
    height: 50px;
    margin-right: 50px;
    font-size: 30px;
    padding-left: 20px;
   
  }
  button {
    height: 50px;
    width: 100px;
    font-size: 30px;
  }
}

  }

 
</style>
