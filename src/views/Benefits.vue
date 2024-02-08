<template>
    <div class="min-h-[830px] flex flex-col justify-between items-center text-white container">
        <h1 class="text-4xl">Train Like an Athlete</h1>
        <p class=" mb-[200px] text-center">This will be a a slideshow of the athletes doing movements and we intention behind the movement. Example caption: Working to produce for backwards and maybe a side by side of it being done in a game moment. Again trying to get the customer to visualize themselves doing the movements and linking it with the success in the game</p>

    </div>
</template>


<script>

import GymCrop from '../assets/gymcrop.jpg'

export default {
  name: 'BenefitsVue',
  data() {
    return {
      photo: GymCrop
    }
  }
}
</script>

<style scoped>

.container{
    background-image: url('../assets/gymcrop.jpg');
    object-fit: scale-down;
    background-repeat: no-repeat;
    background-position: center;

}

</style>