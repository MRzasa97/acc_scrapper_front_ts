<template>
    <form @submit.prevent="login">
        <div>
            <label for="username" class="block text-gray-700">Username</label>
            <input type="text" id="username" v-model="username" class=" border rounded-md " />
        </div>
        <div class=" mb-3">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" v-model="password" class=" border rounded-md "/>
        </div>
            <button type="submit" class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Login</button>
    </form>
    <!-- <div v-if="isRegistered">
        <p>Registration Successful!</p>
    </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AuthService from '../../services/AuthService';

export default defineComponent({
    name: 'LoginForm',
    setup() {
        const username = ref('')
        const password = ref('')
        const isLogin = ref(false)

        const login = async () => {
            const response = await AuthService.Login(username.value, password.value)
            console.log(response)
            isLogin.value = AuthService.isLogin()
        }

        return {
            username,
            password,
            login,
            isLogin
        }
    }
})
</script>