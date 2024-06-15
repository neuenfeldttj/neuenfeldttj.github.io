<template>
    <Navigation />
    <button class="btn btn-primary" @click="download()">Download</button>
    <!-- <pdf ref="myResume" src="TJ_Neuenfeldt_Resume.pdf"></pdf> -->
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue'
// import pdf from 'vue-pdf'

export default defineComponent({
    components: {
        Navigation,
        // pdf
    },
    methods: {
        download: function() {
            this.$refs.myResume.print();
        }
    }
})
</script>

<style scoped>
</style>