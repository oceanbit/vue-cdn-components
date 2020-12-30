<template>
  <div class="app-container">
    <div>
      <h1>This is inside of `client`</h1>
      <button @click='addOneToNumber()'>{{number}}</button>
    </div>

    <div>
      <h1>This is from the CDN</h1>
      <template v-for='comp of comps' :key='comp'>
        <component :is='comp'></component>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, provide } from 'vue';
import {
  MathsSymbol
} from '@vue-cdn/vue-cdn-base';

export default defineComponent({
  name: 'App',
  setup() {
    const number = ref(0)

    const comps = ref([])

    onMounted(() => {
      setTimeout(() => {
        window['onLogin']()
          .then(compNames => {
            comps.value = compNames;
          });
      }, 0);
    })

    function addOneToNumber() {
      number.value += 1;
    }

    provide(MathsSymbol, number)

    return {
      comps,
      number,
      addOneToNumber
    }
  }
})
</script>

<style scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
