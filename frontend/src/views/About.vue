<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/pageAccueil.vue'

export default {
  name: 'Home',
  components: {
    About
  }
}
</script>