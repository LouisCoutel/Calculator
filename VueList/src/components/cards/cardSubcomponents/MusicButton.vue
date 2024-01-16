<!-- eslint-disable eqeqeq -->
<script setup>
import { inject, ref } from 'vue'
import dzrWhite from '../../../assets/brandLogos/deezerLogo.svg'
import dzrPink from '../../../assets/brandLogos/deezerLogoPink.svg'
const props = defineProps({
    brand: String
})

const brand = props.brand
const albumUrl = inject('albumUrl').value

function openLink () {
    console.log(albumUrl)
    window.open(albumUrl, '_blank')
}

const alt = `Logo of ${brand}`

const brandStyle = {}
if (brand == 'YouTube') {
    brandStyle.logo = ref('')
    brandStyle.bg = '#F00'
} else if (brand == 'Deezer') {
    brandStyle.logo = ref(dzrWhite)
    brandStyle.bg = 'bg-dzrPnk'
} else if (brand == 'Spotify') {
    brandStyle.logo = ref('')
    brandStyle.bg = '#1DB954'
}

function changeLogo (event) {
    if (event.type == 'mouseenter') {
        brandStyle.logo.value = dzrPink
    } else if (event.type == 'mouseleave') {
        brandStyle.logo.value = dzrWhite
    }
}

</script>

<template>
  <button aria-label="LinkToMusicServiceButton" :class="brandStyle.bg"
    class="Button relative transition duration-150 hover:bg-white hover:border-dzrPnk hover:border-[1px]  w-12 h-5 p-1 rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex"
    @click="openLink" @mouseenter="changeLogo" @mouseleave="changeLogo">
    <img class="Logo aspect-auto" :src=brandStyle.logo.value :alt="alt" />
  </button>
</template>
