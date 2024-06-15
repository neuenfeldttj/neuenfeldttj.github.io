<template>
    <div class="d-flex justify-content-center">
        <div v-for="social in socials" class="icon-link">
            <a class="icon-link mx-2" :href="social.link" target="_blank">
                <img :src="social.img + extension + '.png'" :style="{width: size+'px'}"/>
            </a>
        </div>
    </div> 
</template>

<script lang="js">
import { defineComponent } from 'vue';
import socials from '../data/socials'

export default defineComponent({
    components: {
        Navigation
    },
    props: {
        useLight: {
            type: Boolean,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 32
        }
    },

    data() {
        return {
            socials
        }
    },

    computed: {
        extension() {
            return this.useLight ? '_light' : '_dark';
        }
    }
    
})
</script>

<style scoped>
</style>