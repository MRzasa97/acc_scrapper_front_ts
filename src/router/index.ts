import {createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'
import LoginForm from '../components/ui/LoginForm.vue';
import RegisterForm from '../components/ui/RegisterForm.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginForm
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterForm
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;