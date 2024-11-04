<script setup>
import { playList } from '@/stores/playList';
const list = playList();
</script>

<template>
    <div class="container-fluid">
        <div class="row bg-dark">
            <div class="col-12 text-success text-center">
                <h1 class="fw-bold">PlayList</h1>
            </div>
            <div class="col-12 text-success px-3 py-5 d-flex justify-content-evenly flex-column align-items-center shadow flex-wrap" v-for="(song, index) in list.playList" :key="index">
                <div class="d-flex align-items-center mb-3">
                    <i class="fa-solid fa-music fs-2 me-3"></i>
                    <h4 class="me-3 ">
                        {{ song.name }}
                    </h4>
                </div>
                <div class="d-flex align-items-center w-50 justify-content-evenly">
                    <div class="bg-white rounded-5 btn btn-play">
                        <i class="fa-solid fa-play m-0 fs-2 "></i>
                    </div>
                    <div class="bg-white rounded-5 btn btn-play">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'View'
}
</script>

<style lang="scss" scoped>
.btn-play{
    position: relative;
    height: 50px;
    width: 50px;
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
