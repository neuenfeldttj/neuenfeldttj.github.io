<template>
    <Navigation />
    <h3 class="display-1 text-center my-5">Contact Info</h3>
    <p class="lead text-center my-5">Feel free to contact me! I should respond within a day.<br/>Click below (or up in the top right) to connect with me on LinkedIn or email me.</p>

    <div class="mx-auto">
        <Socials :useLight="false" :size="128"/>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'
import Socials from './Socials.vue'

export default defineComponent({
    components: {
        Navigation,
        Socials,
    }
})
</script>

<style scoped>

</style>