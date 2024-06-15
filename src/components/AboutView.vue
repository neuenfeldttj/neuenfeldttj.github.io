<template>
    <Navigation />
    <h3 class="display-3 fw-bold text-center my-2">TJ Neuenfeldt</h3>
    <h3 class="display-5 text-center">B.S.E Computer Science 2026</h3>
    <hr class="featurette-divider my-5">
    <h3 class="display-3 text-center my-3">About Me</h3>
    <div class="g-5" v-for="(a, index) in about" :key="index">
        <hr class="featurette-divider my-5">
        <div class="row featurette mx-5 align-items-center">
            <div :class="['col-md-7', order(index)]">
                <p class="lead"> {{ a.text }}</p>
            </div>
            <div class="col-md-5">
                <img :src="a.img" class="img-fluid">
            </div>
        </div>
    </div>
    <hr class="featurette-divider">
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'
import about from '../data/about'

export default defineComponent({
    components: {
        Navigation
    },

    data() {
        return {
            about,
        }
    },

    methods: {
        order: function(index) {
            return (index%2==0) ? 'order-first' : 'order-last';
        }
    }
})
</script>

<style scoped>
</style>