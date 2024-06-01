<template>
    <form @submit.prevent="register">
        <div>
            <label for="username" class="block text-gray-700">Username</label>
            <input type="text" id="username" v-model="username" class=" border rounded-md " />
        </div>
        <div class=" mb-3">
            <label for="password" class="block text-gray-700">Password</label>
            <input type="password" id="password" v-model="password" class=" border rounded-md "/>
        </div>
            <button type="submit" class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Register</button>
    </form>
    <div v-if="isRegistered">
        <p>Registration Successful!</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AuthService from '../../services/AuthService'

export default defineComponent({
    name: 'RegisterForm',
    setup() {
        const username = ref('')
        const password = ref('')
        const isRegistered = ref(false)
        const registrationError = ref('');

        const register = async () => {
            try {
                const response = await AuthService.Register(username.value, password.value);
                if (response.status === 201) {
                    isRegistered.value = true;
                    registrationError.value = '';
                    console.log('Registering:', { username: username.value, password: password.value });
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `Registration failed with status: ${response.status}`);
                }
            } catch (error) {
                console.error('Registration error:', error);
                registrationError.value = 'Registration failed';
                isRegistered.value = false;
            }
        };

        return {
            username,
            password,
            register,
            isRegistered
        };
    }
})
</script>