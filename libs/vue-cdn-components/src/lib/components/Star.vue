<template>
  <div>
    <p>You can even include assets and more from the CDN!</p>
    <img :src='img' alt='An image of a star from Twitch'/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import img from "../assets/star.png";

export default defineComponent({
  name: 'Star',
  setup() {
    return {
      img
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
