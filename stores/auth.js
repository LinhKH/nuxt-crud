


export const useAuthStore = defineStore('auth', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        async login(formData) {
            try {
                await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
                    credentials: "include",
                });
                const token = useCookie('XSRF-TOKEN');
                const { data } = await $fetch(`http://localhost:8000/api/login`, {
                    credentials: "include",
                    method: 'POST',
                    body: { ...formData },
                    headers: {
                        'X-XSRF-TOKEN': token.value,
                    },
                    // watch: false
                });
                console.log('auth-store', data)
            } catch (error) {
                throw error
            }

        }
    },
})