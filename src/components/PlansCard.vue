
<template>
    <div class="">
        <button class="card">
            <h1>Plan</h1>
            <h2>{{sessions}}</h2>
            <h3>{{price}}</h3>
            <button>Buy</button>
        </button>
    </div>
</template>

<script>

export default {
  name: 'PlansCard',
  props: ['sessions', 'price', ]
}

</script>


<style scoped>

.card{
  display: flex;
  flex-direction: column;
  padding:10px;
  justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 10px 10px 20px rgba(255, 255, 255, 0.686);
    transition: all 0.2s ease;
    border-radius: 20%;
}

.card:active {
  transform: scale(.75);
}


</style>