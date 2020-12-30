<template>
  <div class='numberChanger'>
    <button @click='addOneToNumber()'>{{number}}</button>
    <p>Shared state between CDN-hosted component and app state!</p>
    <p>CDN Component styling hosted via the same CDN!</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useAppNumber } from '@vue-cdn/vue-cdn-base';

export default defineComponent({
  name: 'NumberChanger',
  setup() {
    const number = useAppNumber();

    function addOneToNumber() {
      number.value += 1;
    }

    return {
      number,
      addOneToNumber
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.numberChanger {
  background: lightblue;
}
</style>
