<template>
    <Navigation />
    <div class="d-flex justify-content-center my-5">
    <iframe
        :src="filename"
        class="pdf"
    ></iframe>
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'

export default defineComponent({
    components: {
        Navigation,
    },
    data() {
        return {
            filename: "/TJ_Neuenfeldt_Resume.pdf"
        }
    },
})
</script>

<style scoped>
.pdf {
    width: 80%;
    height: 80vh;
}
</style>