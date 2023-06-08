<script>
export default {
  
props: {
  series:Object

},
  
 
 name :"tvCard",
 data () {
    return {
        isFlipped: false,
        languageFlags: {
        en: 'https://images.nexusapp.co/assets/3a/7b/8c/185510738.jpg',
        it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg.png',
        fr: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/280px-Flag_of_France.svg.png",
        ja: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqyEn6AWE2Bt-M9ORC208tltLhTAOcnYGt0eIb5xz&s",
        es: "https://www.cosepercrescere.it/wp-content/uploads/2014/06/SPAGNA.jpg"
        }
    }
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    getLanguageFlag(language) {
    const flagUrl = this.languageFlags[language];
    if (flagUrl) {
      return flagUrl;
    } 
  },
  getImageUrl(posterPath) {
      if (posterPath) {
        return "https://image.tmdb.org/t/p/w500" + posterPath;
      } else {
        return "https://boolfix-jdonzelli.netlify.app/img/logo.png"; // Immagine di fallback quando il poster path non è disponibile
      }
  
  }
  }

}



</script>



        
<template>
 
    <div class="card" @click="flipCard">
      <div class="card-front">
        <img  :src="getImageUrl(series.poster_path)" alt="paperino">
      </div>
      <div class="card-back">
        <h3>Titolo: {{ series.name }}</h3>
        
        <h3 class="languages">Lingua:
          <template v-if="getLanguageFlag(series.original_language)">
            <img :src="getLanguageFlag(series.original_language)" :alt="series.original_language">
          </template>
          <template v-else>
            <span>{{series.original_language}}</span>
          </template>
        </h3>  
        <h3>Voto: {{ series.vote_average }}</h3>
      </div>
    </div>
    
  

   
 </template>

<style lang="scss" scoped>
@use "../src/styles/general.scss";



  .card {
    width: calc(100%/6 - 20px);
    height: 400px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    position: relative;
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
      color: white;

      .languages {
        display: flex;
        align-items: center;
        img {
          margin-left: 30px;
        width: 60px;
        height: 30px;
      }
      }

      
    }

    .card-front {
      background-color: #f1f1f1;
   

      img {
        width:  100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .card-back {
      background-color: black;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      
      

      p {
        font-size: 18px;
        color: white;
      }
    }
  }

 



</style>
