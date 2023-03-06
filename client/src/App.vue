<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Flyout from '@/components/Flyout.vue'

</script>

<template>
  <NavBar />
 
  
  <div class="container">
    <RouterView />
  </div>
  <div class="Flyout">

    <flyout>
      
      <flyout/>
 
  <slot/>

</div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}
.Flyout {
  position: fixed;
  top: 52;
  right: 0;
  bottom: 0;
  width: 300px;
  height; calc(100vh - 52px);
  background-color: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: right 0.5s ease-in-out;
}

.Flyout:hover{
  right: 0;
}

</style>
