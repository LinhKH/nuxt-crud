<template>
    <div class="w-full">
        <div class="card p-10 md:w-3/4 mx-auto lg:w-1/3">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">This is Our Dashboard page</h1>
                        <p class="py-6">Welcome to Dashboard page</p>
                        <p class="py-2">Name: <strong>{{ auth.getUser?.name }}</strong></p>
                        <p class="py-2">Email: <strong>{{ auth.getUser?.email }}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const auth = useAuthStore();
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})
</script>

<style></style>