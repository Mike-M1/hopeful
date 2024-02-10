<template >
    <div class=" h-[620px] container">
         
        <div class=" text-white flex flex-row justify-center thisone"><h1>Some of Our Athletes Attend</h1></div>
        <div class= "h-[450px] outer" ref="outer" >
            <img :src="photo" alt="" class="img1">  
            <div class="btn" v-if="isVisible2" @click="toggleVisibility" >Show Colleges</div>
            <div class="gridstuff p-[55px] w-[340px]" ref="gridcon" v-if="isVisible">
                <div class="c1  animate__animated animate__lightSpeedInLeft"><img :src="jacksonville" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c2 animate__animated animate__backInUp"><img :src="jsu" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c3 animate__animated animate__lightSpeedInRight"><img :src="mit" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c4 animate__animated animate__lightSpeedInLeft"><img :src="oregon" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c5 animate__animated animate__backInUp"><img :src="tarheels" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c6 animate__animated animate__lightSpeedInRight"><img :src="ucf" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c7 animate__animated animate__lightSpeedInLeft"><img :src="texas" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c8 animate__animated animate__backInUp"><img :src="jacksonville" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
                <div class="c9 animate__animated animate__lightSpeedInRight"><img :src="jacksonville" alt="" class="w-[80px] h-[50px] rounded-2xl"></div>
            </div>
        </div>
    </div>
</template>

<script >
import {ref} from 'vue'
import GreenPhoto from '../assets/greenphoto.jpeg'
import Jacksonville from '../assets/collegephotos/jacksonville.jpg'
import Jsu from '../assets/collegephotos/jsu.png'
import Mit from '../assets/collegephotos/MIT.png'
import Oregon from '../assets/collegephotos/oregon.png'
import Tarheels from '../assets/collegephotos/tarheels.png'
import Ucf from '../assets/collegephotos/ucf.png'
import Texas from '../assets/collegephotos/texas.png'
import 'animate.css'




export default {
//   name: 'SocialProof',
//     data() {
//         return {
//         photo: GreenPhoto,
//         jacksonville: Jacksonville,
//         jsu: Jsu,
//         mit: Mit,
//         oregon: Oregon,
//         tarheels: Tarheels,
//         ucf: Ucf,
//         texas: Texas
//         }
//     }
data() {
    return {
      isVisible: false,
        isVisible2: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
      this.isVisible2 = !this.isVisible2;
    }
  },
  computed: {
    photo() {
      return GreenPhoto;
    },
    jacksonville() {
      return Jacksonville;
    },
    jsu() {
      return Jsu;
    },
    mit() {
      return Mit;
    },
    oregon() {
      return Oregon;
    },
    tarheels() {
      return Tarheels;
    },
    ucf() {
      return Ucf;
    },
    texas() {
      return Texas;
    }

  }
   
}
</script>

<style scoped>
/* .container{
    min-height: 840px;
    max-height: 1000px;
} */

.container{
    width:100vw;
    display: block;
}
.thisone{
    width:100vw;
}

.outer{
    position: relative;
    width:100vw;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.img1{
  position: absolute;
  z-index: -1;
  max-width: 100%;
  min-width: 35vw;
  height: 70vh;
  top: 0;

 
}

.btn{
    border: 2px solid white;
    border-radius: 20px;
    color: white;
    height: fit-content;
    padding: 10px 30px;
    background-color: black;
    position:absolute;
    z-index: 3;
    bottom: 300px;
    transition:all .2s ease;
}

.btn:active{
    transform: scale(.75);
}

.gridstuff{
    position: absolute;
    top: 100px;
    display: grid;
    grid-template-areas:
    ' c1 c2 c3'
    ' c4 c5 c6'
    ' c7 c8 c9';
    height:650px;
    width: 400px

}
.gridstuff > * {
    margin: 10px;
    border-radius: 20px;
}

.c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9{
    height: fit-content;
    width: fit-content;
}
</style>