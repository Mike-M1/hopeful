<template>
    <div class="container min-h-[480px] w-[340px]">
        <h1 class="h-[120px]  flex justify-center pt-[20px] text-2xl text-blue-500">Sign Up To Be a Better Athlete</h1>

        <div class="flex flex-col h-4/5 items-center pt-[200px]">
          <label for="email">Email</label>
          <input class="btn w-[250px] h-[40px] p-[10px]" type="email" id="email" name="email" placeholder="Enter your email">
          <button class="btn btn1">Lets Get It</button>
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
  margin: 10px;
  background-color: black;
  color: white;
  padding:5px 10px 5px 10px;
  border-radius: 30px;
  transition: all .3s ease-in-out;
}

.btn1:hover{
  background-color: white;
  color: black;
  transform: scale(1.5);
  border: none
}

.btn1:active{
  transform: scale(.5);
}

</style>