<template>
    <div class="bg-white w-[340px]">
        
        <Swiper>
          <SwiperSlide v-for="slide in slides">
            <div class="testimon w-full h-[200px]">
              <h1>{{slide.name}}</h1>
              <p>{{slide.contenet}}</p>
              <h1>Scroll to See More</h1>
            </div>
          </SwiperSlide>
        </Swiper>
        
    </div>
</template>


<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'TestimonialsVue',
  data() {
    return {
      slides: [
        {
          name:"Testimonial 1",
          contenet: "Some text"
        },
        {
          name:"Testimonial 2",
          contenet: "Some text"
        },
        {
          name: 'Testimonial 3',
          contenet: "Some text"
        }
        ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.testimon{

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>