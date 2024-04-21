

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false
    }),
    getters: {
        getLoggedIn: (state) => state.loggedIn,
    },
    actions: {
        async login(formData) {
            const token = useTokenStore();
            try {
                await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
                    credentials: "include",
                });
                const xsrf_token = useCookie('XSRF-TOKEN');
                const { data } = await $fetch(`http://localhost:8000/api/login`, {
                    credentials: "include",
                    method: 'POST',
                    body: { ...formData },
                    headers: {
                        'X-XSRF-TOKEN': xsrf_token.value,
                    },
                    watch: false
                });
                this.loggedIn = true;
                token.setToken(data.token)
            } catch (error) {
                throw error
            }

        }
    },
})