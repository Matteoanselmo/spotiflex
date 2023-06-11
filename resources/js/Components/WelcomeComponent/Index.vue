<script setup>
    import VueAudio from 'vue-audio';
    // import AudioPlayer from 'vue3-audio-player'
    // import 'vue3-audio-player/dist/style.css'
    import AudioPlayer from '@liripeng/vue-audio-player'
    import { playList } from '@/stores/playList';
    const list = playList();
</script>

<template>
        <!-- <div class="col-12 mb-5">
            <vue-audio :src="songUrl"></vue-audio>
        </div>
        -->
        <!-- <div class="col-12 mb-5">
            <audio controls>
                <source :src="list.playList[0].url" type="audio/mp3">
            </audio>
        </div> -->
        <!-- <div class="col-12 mb-5">
            <AudioPlayer
                :option="{
                    src: 'https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1',
                    title: 'your-audio-title',
                    coverImage: 'https://your-cover-image.png',
                }"
            />
        </div> -->
        <div class="col-12 bg-dark px-5 mb-2" v-if="list.playList.length > 0">
            <audio-player
                ref="audioPlayer"
                :audio-list="list.playList.map(elm => elm.url)"
                :before-play="handleBeforePlay"
                theme-color="#198754"
                />
        </div>
</template>

<script>
export default {
    components: {
        VueAudio,
        AudioPlayer
    },
    data() {
        return {
            currentAudioName: '',
            audioList: [
                {
                    name: 'audio1',
                    url: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"
                },
                {
                    name: 'audio2',
                    url: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1"
                }
            ],
            songUrl: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"
        };
    },
    methods: {
        // Something to do before playing
        handleBeforePlay(next) {
        // There are a few things you can do here...
        this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name

        next() // Start playing
        }
    }
}
</script>

<style>

</style>
