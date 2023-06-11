<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Index from '../Components/WelcomeComponent/Index.vue'
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div class="container-fluid">
        <div class="row justify-content-evenly align-items-center fixed-bottom bg-dark py-3">
            <Index/>
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
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="btn btn-primary fw-bold fs-2"
                        >Dashboard</Link
                    >

                    <template v-else>
                        <Link
                            :href="route('login')"
                            class="fw-bold fs-2 btn btn-success mb-3"
                            >Log in</Link
                        >

                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="fw-bold fs-2 btn btn-success"
                            >Register</Link
                        >
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
