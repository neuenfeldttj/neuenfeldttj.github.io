<template>
    <Navigation />
    <div class="mx-3 my-5"> 
      <div class="row">
        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title display-1 fw-bold">TJ NEUENFELDT</h3>
              <p class="card-text fs-2 fw-light text-break mt-5">A computer science student passionate about robotics, machine learning, and the arts.</p>
            </div>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <img src="/tj_headshot2.jpg" class="profile"/>
        </div>
      </div>
    </div>
  </template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'

export default defineComponent({
    components: {
        Navigation
    }
})
</script>

<style scoped>
/* .card {
    width: 50%;
} */

.profile {
    width: 60%;
    border-radius: 10% 30%;
}
</style>