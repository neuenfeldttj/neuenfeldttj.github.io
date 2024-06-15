<template>
    <Navigation />

    <h3 class="display-1 text-center my-5">Projects</h3>
    <p class="lead text-center my-3">Here are some of my projects I've been working on lately when I have free time!</p>

    <div class="d-flex flex-wrap justify-content-center">
        <div v-for="p in projects" class="card mx-2">
            <img :src="p.img" class="card-img-top">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text text-break">{{ p.description }}</p>
                <a :href="p.link" target="_blank" class="btn btn-primary mt-auto">Go To</a>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'
import projects from '../data/projects'

export default defineComponent({
    components: {
        Navigation
    },
    data() {
        return {
            projects
        }
    }
})
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 66%;
    object-fit: cover;
}

.card {
    max-width: 30%;
}
</style>