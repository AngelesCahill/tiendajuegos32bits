<template>
  
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-5">
            <li class="nav-item active mx-5">
              <router-link to="/">Home</router-link> 
            </li>

            <li class="nav-item mx-5">
              <router-link to="/busquedas">Busquedas</router-link>
            </li>

            <li class="nav-item mx-5">
              <router-link to="/ventas">Ventas</router-link>
            </li>

            <li class="nav-item mx-5">
              <router-link to="/total">Total</router-link>
            </li>
          </ul>
        </div>
    </nav>
 
</template>

<script>
export default {
  name: 'Navbar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
