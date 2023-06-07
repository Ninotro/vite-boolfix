<script>
export default {
 
 name : "AppHeader",


}


</script>

<template>
  <div id="container-header">
    <div>BOOLFIX</div>
    <input type="text" placeholder="Inserisci il nome del film">
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

  input {
    color: black;
   
    height: 50px;
    margin-right: 50px;
    font-size: 30px;
    padding-left: 20px;
   
  }
}
</style>
