<template>
    <div class="">
        <div class="card">
            <h1>Plan</h1>
            <h2>{{sessions}}</h2>
            <h3>{{price}}</h3>
            <button>Buy</button>
        </div>
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
}


</style>