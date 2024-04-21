<template>
    <div class="w-full">
        <div class="card p-10 md:w-3/4 mx-auto lg:w-1/3">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">This is our home page</h1>
                        <p class="py-6">Welcome to home page</p>
                        <button @click="couter.increment">Count {{ couter.count }} - {{ couter.doubleCount }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

    const couter = useCounterStore();
</script>

<style></style>