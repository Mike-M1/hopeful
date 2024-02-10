<template>
    <div class="w-[340px] min-h-[650px] flex flex-col justify-between items-center m-auto text-white container">
      <img :src="photo" alt="" class="img1">  
      <h1 class="text-4xl animate__animated animate__swing" v-if="visible3">Train Like an Athlete</h1>
       
      <section id="1">
        <img :src="bullsEye" alt="" class="be be1" @click="visible1">
        <div v-if="isVisible1">
          <div class="bg-white w-[100px] h-[4px] text1l rounded-4xl text1l1" ></div>
          <div class="w-[200px] rounded-2xl  text-sm text-center bg-black text1" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur this laudantium neque animi
          </div>  
        </div>  
      </section>

    <section id="2">
          <img :src="bullsEye" alt="" class="be be5" @click="visible2">
          <div v-if="isVisible2">
            <div class="bg-white w-[100px] h-[4px]  rounded-4xl text1l text1l2" ></div>
            <div class=" w-[200px] rounded-2xl text-sm text-center bg-black text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur laudantium neque animi
            </div>
          </div> 
    </section>
          

      <section>
        <img :src="bullsEye" alt="" class="be be4" @click="visible3">
        <div v-if="isVisible3">
          <div class="bg-white w-[100px] h-[4px]  rounded-4xl text1l text1l3" ></div>
          <div class=" w-[200px] rounded-2xl  text-sm text-center bg-black text3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur laudantium neque animi
          </div>
        </div>  
      </section>


      <section>
        <img :src="bullsEye" alt="" class="be be3" @click="visible4" >
        <div v-if="isVisible4">
        <div class="bg-white w-[100px] h-[4px] text1l rounded-4xl text1l text1l4" ></div>
          <div class=" w-[200px] rounded-2xl  text-sm text-center bg-black text4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur laudantium neque animi
          </div>
        </div>
      </section>

    
     
      <section id="5">
        <img :src="bullsEye" alt="" class="be be2" @click="visible5">
        <div v-if="isVisible5">
          <div class="bg-white w-[100px] h-[4px] text1l rounded-4xl text1l text1l5" ></div>
              <div class=" w-[200px] rounded-2xl  text-sm text-center bg-black text5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur laudantium neque animi
              </div>
        </div>    
      </section>
      
      
    </div>
</template>


<script>
import 'animate.css'
import GymCrop from '../assets/gymcrop.jpg'
import BullsEye from '../assets/realbullseye.jpg'

export default {
  name: 'BenefitsVue',
  data() {
    return {
      photo: GymCrop,
      bullsEye: BullsEye,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false
    }
  },
   methods: {

    visible1(){
      this.isVisible1 = !this.isVisible1;
      this.isVisible2 = false;
      this.isVisible3 = false;
      this.isVisible4 = false;
      this.isVisible5 = false;
    },
    visible2(){
      this.isVisible2 = !this.isVisible2;
      this.isVisible1 = false;
    
      this.isVisible3 = false;
      this.isVisible4 = false;
      this.isVisible5 = false;
    },
    visible3(){
      this.isVisible1 = false;
      this.isVisible2 = false;
      this.isVisible3 = !this.isVisible3;
      this.isVisible4 = false;
      this.isVisible5 = false;
    },
    visible4(){
      this.isVisible1 = false;
      this.isVisible2 = false;
      this.isVisible3 = false;
      this.isVisible4 = !this.isVisible4;
      this.isVisible5 = false;
    },
    visible5(){
      this.isVisible5 = !this.isVisible5;
      this.isVisible1 = false;
      this.isVisible2 = false;
      this.isVisible3 = false;
      this.isVisible4 = false;
      
    }

  },
  computed(){
    return{
      RisVisible1(){
        return this.isVisible1
      },
      RisVisible2(){
        return this.isVisible2
      },
      RisVisible3(){
        return this.isVisible3
      },
      RisVisible4(){
        return this.isVisible4
      },
      RisVisible5(){
        return this.isVisible5
      }
    }
  
  }
}
</script>

<style scoped>



.container{
    position: relative;

}
.textbox{
  position: relative;
}

.img1{
  position: absolute;
  z-index: -1;
  display: block;
  width: fit-content;
  margin:auto;
 
}

.be{
  width:30px;
  height:30px;
  border-radius: 100%;
  position: absolute;
  z-index: 3;
}

.be1{
  top: 5%;
  left: 10%;
  
}

.be2{
  right:17%;
  bottom: 10%;
}

.be3{
  top: 61%;
  left: 33%;
}

.be4{
  top: 40%;
  right: 11%;
}

.be5{
  top: 25%;
  left: 50%;
}

.text1l{
  position: absolute;
  z-index: 2;
  border-radius: 70%;
}

.text1l1{
  transform: rotate(20deg);
  top:8.55%;
  left: 13.25%;
}
.text1{
  position: absolute;
  z-index: 3;
  top: 10%;
  left: 40%;
  transform: rotate(0deg);
}

.text1l2{
  transform: rotate(-70deg);
  top: 20.5%;
  left: 45.5%;
  
}

.text2{
  position: absolute;
  z-index: 3;
  top: 7%;
  left: 25%;
  transform: rotate(0deg);
}

.text1l4{
  transform: rotate(90deg);
  bottom: 28.5%;
  left: 22.5%;
}

.text4{
  position: absolute;
  z-index: 3;
  bottom: 10%;
  left: 10%;
  transform: rotate(0deg);
}

.text1l3{
  transform: rotate(70deg);
  top: 35.5%;
  right: 5.25%;
}

.text3{
  position: absolute;
  z-index: 3;
  top: 17%;
  right: 10%;
  transform: rotate(0deg);
}

.text1l5{
  transform: rotate(0deg);
  bottom: 11.95%;
  left: 49%;
}

.text5{
  position: absolute;
  z-index: 3;
  bottom: 8%;
  left: 10%;
  transform: rotate(0deg);

}

section > img{
  transition: all 0.2s ease;
}

section > img:active{
  transform: scale(.75);
}

</style>




 <!-- <p class=" mb-[200px] text-center">This will be a a slideshow of the athletes doing movements and we intention behind the movement. Example caption: Working to produce for backwards and maybe a side by side of it being done in a game moment. Again trying to get the customer to visualize themselves doing the movements and linking it with the success in the game</p> -->