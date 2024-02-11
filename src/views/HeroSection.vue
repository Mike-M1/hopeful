<template>
  <div class="video-container">
    <video ref="videoElement" autoplay muted loop class="video">
      <source :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import PhoneVideo from '../assets/GYMPhoneVideo.mp4'

export default {
  name: 'HeroSection',
  data() {
    return {
      video: PhoneVideo
    }
  },
  mounted() {
    this.$refs.videoElement.load()
    this.$refs.videoElement.play()
  }
}
</script>

<style>
/* You can add styles for the video or the container div here if needed */

.video-container {
  display: block;
  position: relative;
  width: 100vw;
  height: 75vh;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

/* fill contain cover none scale-down*/
