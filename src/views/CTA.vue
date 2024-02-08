<template>
    <div class="container min-h-[480px]">
        <h1 class="h-[120px]  flex justify-center pt-[20px] text-2xl text-blue-500">Sign Up To Be a Better Athlete</h1>

        <div class="flex flex-col h-4/5 items-center pt-[200px]">
          <label for="email">Email</label>
          <input class="btn" type="email" id="email" name="email" placeholder="Enter your email">
          <button class="btn btn1">Sign Up</button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'CTAVue'
}
</script>


<style scoped>


.container{
    background-image: url('../assets/img2.jpeg');
    object-fit:scale-down;
    background-repeat: no-repeat;
    background-position: center;

}

.btn{
  border: solid 1px black;
  margin:5px;
  
}

.btn1{
  background-color: black;
  color: white;
  padding:5px 10px 5px 10px;
  border-radius: 30px;
}

</style>