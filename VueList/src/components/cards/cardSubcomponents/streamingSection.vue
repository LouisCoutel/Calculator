<script setup>
import MusicButton from './MusicButton.vue'
import { ref } from 'vue'

const props = defineProps({
    albumUrl: String,
    externalId: String
})

const albumUrl = props.albumUrl
const externalId = props.externalId

const embedUrl = `https://widget.deezer.com/widget/auto/album/${externalId}`

// static for now, ref later
const userDefStreamingService = 'Deezer'
const player = ref(false)
</script>

<template>
  <section class="streamingServicesWrapper h-full flex items-end justify-end gap-1 self-stretch wrap">
    <MusicButton :brand="userDefStreamingService" :albumUrl="albumUrl"></MusicButton>

    <iframe v-if="player" title="deezer-widget" :src="embedUrl" width="210" height="150" frameborder="0"
      allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
  </section>
</template>
