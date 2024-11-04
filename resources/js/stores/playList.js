import { defineStore } from 'pinia'

export const playList = defineStore('list', {
    state: () => ({
        currentAudioName: '',
        playList: [
            {
                name: 'Perfect',
                url: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"
            },
            {
                name: '7 Rings',
                url: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1"
            },
            {
                name: 'Girls Like You',
                url: "https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1"
            }
        ]
    }),
    actions: {
        addToList(song){
            this.playList.push(song);
        },
        removeToList(songToRemove) {
            const index = this.playList.findIndex(song => song === songToRemove);
            if (index !== -1) {
                this.playList.splice(index, 1);
            }
        },
        // Something to do before playing
        handleBeforePlay(next) {
            // There are a few things you can do here...
            this.currentAudioName = this.playList[this.$refs.audioPlayer.currentPlayIndex].name

            next() // Start playing
        }
    },
    persist: true,
})
