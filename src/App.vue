<script>
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent,ref } from 'vue';
import Modal from './components/Modal.vue';
import RegisterForm from './components/ui/RegisterForm.vue';
import LoginForm from './components/ui/LoginForm.vue';
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
    const router = useRouter();
    const route = useRoute();

    const showModal = (title) => {
      isModalOpen.value = true
      modalTitle.value = title
    }

    const closeModal = () => {
      isModalOpen.value = false
      router.push('/');
    }

    return {
      isModalOpen,
      modalTitle,
      showModal,
      closeModal
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
          <router-link :to="{ name: 'Register' }" @click="showModal('Register')" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Register</router-link>
          <router-link :to="{ name: 'Login' }" @click="showModal('Login')" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Login</router-link>
        </div>
      </div>
    </nav>
    <Modal :isOpen="isModalOpen" :title="modalTitle" @close="closeModal">
      <RegisterForm v-if="modalTitle === 'Register'" />
      <LoginForm v-if="modalTitle === 'Login'" />
    </Modal>
  </div>
</template>