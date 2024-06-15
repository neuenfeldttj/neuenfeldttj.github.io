<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
    </ul>

    <div class="ms-auto">
        <Socials :useLight="true" />
    </div>
    
  </div>
</nav>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Socials from './Socials.vue'

export default defineComponent({
    components: {
        Socials
    }
})
</script>

<style scoped>
.nav-link {
    color: var(--bs-primary-bg-subtle);
}

.nav-link.active {
    font-weight: bold;
    color: var(--bs-primary-bg-subtle)
}
/* .navbar {
    min-height: 70px;
}
.navbar-nav .nav-link {
  transition: background-color 0.8s ease;
  height: 100%;
}
.nav-link:hover {
  background-color: var(--bs-primary-bg-subtle);
}
*/
</style>