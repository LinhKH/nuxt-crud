<script lang="ts" setup>

const auth = useAuthStore();
const token = useTokenStore();
definePageMeta({
    middleware: ["guest"]
});
const form = reactive({
    name: 'Linh Kieu',
    email: 'test@example.com',
    password: 'password',
    password_confirmation: null
});

const errors = ref([]);

const handleSubmit = async () => {
    try {
        await auth.register(form);
    } catch (error) {
        console.log(error);

        errors.value = error.data.errors
    }

}
</script>
<template>
    <div class="w-full">
        <div class="card p-10 md:w-3/4 mx-auto lg:w-1/3">
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
                            <div class="mb-5">
                                <FormLabel for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your name
                                </FormLabel>
                                <FormInputText v-model="form.name" type="text" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <span v-if="errors.name" class="text-red-500">{{ errors.name[0] }}</span>
                            </div>
                            <div class="mb-5">
                                <FormLabel for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </FormLabel>
                                <FormInputText v-model="form.email" type="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span>
                            </div>
                            <div class="mb-5">
                                <FormLabel for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your password
                                </FormLabel>
                                <FormInputText v-model="form.password" type="password" id="password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <span v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</span>
                            </div>
                            <div class="mb-5">
                                <FormLabel for="password_confirmation"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirmation Password
                                </FormLabel>
                                <FormInputText v-model="form.password_confirmation" type="password"
                                    id="password_confirmation"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <span v-if="errors.password_confirmation" class="text-red-500">{{
                                    errors.password_confirmation[0] }}</span>
                            </div>
                            <ButtonPrimary>Register</ButtonPrimary>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>