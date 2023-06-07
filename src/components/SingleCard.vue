<script>
export default {
  props: {
    details: Object

  },
 
 name :"SingleCard",
 data () {
    return {
        isFlipped: false
    }
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }

} 



</script>



        
<template>
 <div class="container">
    <div class="card" @click="flipCard">
      <div class="card-front">
        <img :src="details.poster_path[0]" alt="Front Image">
      </div>
      <div class="card-back">
        <p>Caratteristiche della carta</p>
      </div>
    </div>
    
  </div>

   
 </template>

<style lang="scss" scoped>
@use "../src/styles/general.scss";

.container {
  display: flex;
  justify-content: flex-start;

  .card {
    width: calc(100% / 6);
    height: 400px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    cursor: pointer;

    &:first-child {
      margin-right: 10px;
    }

    &:hover {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    .card-front {
      background-color: #f1f1f1;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width:  100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .card-back {
      background-color: #e1e1e1;
      transform: rotateY(180deg);
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 18px;
        color: #333;
      }
    }
  }

 
}


</style>
