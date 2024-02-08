<template>
    <div class=" w-full flex flex-col pb-[40px]" >
        <div class="flex justify-center items-center text-white m-[20px] text-2xl">

          <h1>Gym Plans</h1>
        </div>
        <div class="container1 ">
          <div class="flex flex-row justify-around">
           <PlansCard class="plan1 w-[150px] m-[20px]" sessions="1 session" price="$300/session"/>
            <PlansCard class="plan2 w-[150px] m-[20px]" sessions="8 sessions" price="$275/session" /> 
          </div>
        
          <div class="flex flex-row justify-around">
            <PlansCard class="plan3 w-[150px] m-[20px]"sessions="12 sessions" price="$265/session" />
            <PlansCard class="plan4 w-[150px] m-[20px]" sessions="16 sessions" price="$250/session"/>
          </div>
        
        </div>

        <div class="flex justify-center items-center text-white m-[20px] text-2xl">

          <h1>Home Plans</h1>
        </div>

        <div class="container2 ">

          <div class="flex flex-row justify-around">
            <PlansCard class="plan5 w-[150px] m-[20px]" sessions="1 session" price="$225/session"/>
            <PlansCard class="plan6 w-[150px] m-[20px]" sessions="8 sessions" price="$200/session" />
          </div>
       
        
          <div class="flex flex-row justify-around">
            <PlansCard class="plan7 w-[150px] m-[20px]" sessions="12 sessions" price="$12/session"/>
            <PlansCard class="plan8 w-[150px] m-[20px]" sessions="16 sessions" price="$175/session"/>
          </div>
        
        </div>
    </div>
</template>


<script>
import PlansCard from '../components/PlansCard.vue'

export default {
  name: 'PlansVue',
  components: {
    PlansCard
  },
}
</script>

<style scoped>
PlansCard{
  margin: 20px;

}


.container1{
  grid-template-areas: 
  'plan1 plan2'
  'plan3 plan4';

}
.container2{
  grid-template-areas: 
  'plan5 plan6 plan7 plan8';

}
</style>