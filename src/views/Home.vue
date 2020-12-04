<template>
  <div class="home">
      <Navbar/>
      <div class="text-center my-5">
        <h1>32 bits</h1>
        <h2 class="text-center my-5"> Juegos de PC y consolas</h2>
      </div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style scoped>
h1 {
  font-size: 7rem;
}
</style>
