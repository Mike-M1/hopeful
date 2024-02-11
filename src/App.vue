<template>
  <div>
  <header >
    <div class="menu" @click="visible" v-if="isVisible">
      <video contorls="false" ref="menuvid" autoplay muted loop class="video h-full rounded-full" >
      <source :src="video" type="video/mp4" />
    </video>
    </div>
    <div class="pos">
      <div class="backg" v-if="isVisible2" @click="visible2">
        <div class="menu2">
          <ul>
            <li><button>Home</button></li>
            <li><button>Plans</button></li>
            <li><button>Sign Up</button></li>
            <li><button>Benefits</button></li>
          </ul>
        </div>
      </div>
    </div>
    <HeroSection class=""/>
    <SocialProof />
    <Benefits class="block" />
     <CTA class="block" />
      <Plans class="block" />
      <Testimonials class="block" />
      <CTA />


    <!-- 
    
    
   
    <Footer/>
   
    <NavBar />
    <div class="flex flex-col justify-between p-10 items-center text-white">
      <h1 class=" text-1xl ">The flo</h1>
      <h1>Main Section</h1>
    </div>
    <div class="flex flex-row justify-center">
    <RouterView class="flex" />
    
    </div> -->
  </header>

  <RouterView />
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
import HeroSection from './views/HeroSection.vue';
import SocialProof from './views/SocialProof.vue';
import Benefits from './views/Benefits.vue';
import CTA from './views/CTA.vue';
import Plans from './views/Plans.vue';
import Testimonials from './views/Testimonials.vue';
import GymVid from './assets/GymVid.mp4'



export default {
  name: 'App',
  components: {
    // NavBar,
    HeroSection,
    SocialProof,
    Benefits,
    CTA,
    Plans,
    Testimonials,
    // LogIn
  },
  methods: {
    visible(){
      this.isVisible = !this.isVisible;
      this.isVisible2 = true;
    },
    visible2(){
      this.isVisible2 = !this.isVisible2;
      this.isVisible = true;
    }
  },
  data() {
    return {
      video: GymVid,
      isVisible: true
    }
  },
  computed: {
    RisVisible(){
      return this.isVisible
    },
    RisVisible2(){
      return this.isVisible2
    }
  },
  mounted() {
    this.$refs.menuvid.load()
    this.$refs.menuvid.play()
  }
}


</script>

<style scoped>
  .menu{
  position:fixed;
  border-radius: 100%;
  border: solid 1px black;
  background-color: black;
  object-fit: fill;

  
  width:50px;
  height:50px;
  top: 2%;
  right: 4%;
  z-index: 3;

}

.video{
  object-fit: fill;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index: 1;
}

.backg{
  background-color: black;
  position: fixed;
  opacity: 50%;
  width:100%;
  height:100%;
  z-index: 5;
}



.menu2{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
  color: white;

  background-color: black;
  opacity:100%;
  width: 100%;
  height:100%;
}
ul{
  list-style-type: none;
  
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
  height:100%;
  width: 100%;
}

</style>
