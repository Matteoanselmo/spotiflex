import { defineStore } from 'pinia'

export const playList = defineStore('list', {
    state: () => ({
        playList: [
            {
                name: 'audio1',
                url: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1"
            },
            {
                name: 'audio2',
                url: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1"
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
        }
    },
    persist: true,
})
