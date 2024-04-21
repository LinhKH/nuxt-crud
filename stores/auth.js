

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    persist: {
        paths: ["user"]
    },
    getters: {
        getLoggedIn: (state) => state.loggedIn,
        getUser: (state) => state.user,
    },
    actions: {
        async login(formData) {
            try {

                await this.csrfToken();
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
                await this.commonSetter(data);
            } catch (error) {
                throw error
            }
        },
        async register(formData) {
            try {
                await this.csrfToken();
                const xsrf_token = useCookie('XSRF-TOKEN');

                const { data } = await $fetch(`http://localhost:8000/api/register`, {
                    credentials: "include",
                    method: 'POST',
                    body: { ...formData },
                    headers: {
                        'X-XSRF-TOKEN': xsrf_token.value,
                    },
                    watch: false
                });
                await this.commonSetter(data)
            } catch (error) {
                throw error
            }

        },
        async csrfToken() {
            await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
                credentials: "include",
            });
        },
        async commonSetter(data) {
            const token = useTokenStore();
            this.loggedIn = true;
            this.user = data.user;
            token.setToken(data.token);
            return navigateTo("/dashboard");
        }
    },
})