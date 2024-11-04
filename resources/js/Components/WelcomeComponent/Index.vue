<script setup>
    import VueAudio from 'vue-audio';
    // import AudioPlayer from 'vue3-audio-player'
    // import 'vue3-audio-player/dist/style.css'
    import AudioPlayer from '@liripeng/vue-audio-player'
    import { playList } from '@/stores/playList';
    const list = playList();
    defineProps({
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    });

</script>

<template>
        <div class="container-fluid">
        <div class="row justify-content-evenly align-items-center fixed-bottom bg-dark py-3">
            <div class="col-12 bg-dark px-5 mb-2" v-if="list.playList.length > 0">
                <audio-player
                    ref="audioPlayer"
                    :audio-list="list.playList.map(elm => elm.url)"
                    :before-play="handleBeforePlay"
                    theme-color="#198754"
                    />
            </div>
            <div class="col-3 text-center">
                <button class="btn  btn-success  bg-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div class="col-3 text-center">
                <button class="btn  btn-success  bg-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="fa-regular fa-user"></i>
                </button>
            </div>
            <div class="col-3 text-center">
                <button class="btn  btn-success  bg-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn btn-dark text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    <i class="fa-solid fa-xmark fs-2"></i>
                </button>
            </div>
            <div class="offcanvas-body ">
                <div v-if="canLogin" class="d-flex flex-column">
                    <a v-if="$page.props.auth.user" :href="route('dashboard')" class="btn btn-primary fw-bold fs-2">
                        Dashboard
                    </a>

                    <template v-else>
                        <a :href="route('login')" class="fw-bold fs-2 btn btn-success mb-3">
                            Log in
                        </a>

                        <a v-if="canRegister" :href="route('register')" class="fw-bold fs-2 btn btn-success">
                            Register
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    components: {
        VueAudio,
        AudioPlayer,
    },
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<style>

</style>
