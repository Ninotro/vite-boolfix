<script>
export default {
  
props: {
  details:Object

},
  
 
 name :"SingleCard",
 data () {
    return {
        isFlipped: false,
        languageFlags: {
        en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
        it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2003%E2%80%932006%29.svg.png',
        fr: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/280px-Flag_of_France.svg.png",
        ja: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqyEn6AWE2Bt-M9ORC208tltLhTAOcnYGt0eIb5xz&s",
        es: "https://www.cosepercrescere.it/wp-content/uploads/2014/06/SPAGNA.jpg",
        de:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
        nl: "https://www.novalibandiere.it/wp-content/uploads/Olanda.jpg",
        zh: "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg"
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
        return "https://image.tmdb.org/t/p/w342" + posterPath;
      } else {
        return "https://boolfix-jdonzelli.netlify.app/img/logo.png"; // 
      }
  
  },
  getRoundedVote() {
    return Math.ceil(this.details.vote_average / 2);
  },
  
  }
  }
  





</script>



        
<template>
 
    <div class="card" @click="flipCard">
      <div class="card-front">
        <img  :src="getImageUrl(details.poster_path)" alt="paperino">
      </div>
      <div class="card-back">
        <h3>Titolo: {{ details.title }}</h3>
        <h3>Titolo originale: {{ details.original_title }}</h3>
        <h3 class="languages">Lingua:
          <template v-if="getLanguageFlag(details.original_language)">
            <img :src="getLanguageFlag(details.original_language)" :alt="details.original_language">
          </template>
          <template v-else>
            <span>{{details.original_language}}</span>
          </template>
        </h3>  
        <div class="rating">
          <i v-for="index in 5" :key="index" :class="{ 'fas fa-star': index <= Math.floor(getRoundedVote()), 'far fa-star': index > Math.floor(getRoundedVote()) }"></i>
        </div>
        <p>Overview: {{ details.overview }}</p>
        
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
      font-size: 30px;
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
      overflow-y: auto;
      

      p {
        font-size: 18px;
        color: white;
      }
    }
  }

  .fas.fa-star {
  font-size: 30px;
  color: yellow
}

.far.fa-star {
  font-size: 30px;
  color: white;
}



</style>
