<script>
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent,ref, computed, onMounted } from 'vue';
import Modal from './components/Modal.vue';
import RegisterForm from './components/ui/RegisterForm.vue';
import LoginForm from './components/ui/LoginForm.vue';
import AuthService from './services/AuthService';
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    Modal,
    RegisterForm,
    LoginForm
  },
  setup() {
    const isModalOpen = ref(false);
    const modalTitle = ref('');
    const isLoggedIn = ref(false);
    const router = useRouter();
    const route = useRoute();

    const showModal = (title) => {
      isModalOpen.value = true
      modalTitle.value = title
    }

    const closeModal = () => {
      isModalOpen.value = false
      checkLoggedIn()
      router.push('/');
    }

    const checkLoggedIn = () => {
      console.log(AuthService.isLoggedIn())
      isLoggedIn.value = AuthService.isLoggedIn()
    }

    const logout = () => {
      AuthService.logout();
      checkLoggedIn()
      router.push({ name: 'Home' })
    }

    onMounted(() => {
      checkLoggedIn()
    });

    return {
      isModalOpen,
      modalTitle,
      showModal,
      closeModal,
      isLoggedIn,
      logout
    }
  }
})
</script>

<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="contrainer mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">
          <p>ACC</p>
        </div>
        <div>
          <router-link v-if="!isLoggedIn" :to="{ name: 'Register' }" @click="showModal('Register')" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Register</router-link>
          <button v-if="isLoggedIn" @click="logout" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Logout</button>
          <router-link v-if="!isLoggedIn" :to="{ name: 'Login' }" @click="showModal('Login')" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Login</router-link>

        </div>
      </div>
    </nav>
    <Modal :isOpen="isModalOpen" :title="modalTitle" @close="closeModal">
      <RegisterForm v-if="modalTitle === 'Register'" />
      <LoginForm v-if="modalTitle === 'Login'" :close="closeModal"/>
    </Modal>
  </div>
</template>