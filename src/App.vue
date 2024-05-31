<script>
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent,ref } from 'vue';
import Modal from './components/Modal.vue';
import RegisterForm from './components/ui/RegisterForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    Modal,
    RegisterForm
  },
  setup() {
    const isModalOpen = ref(false);
    const modalTitle = ref('');

    const showModal = (title) => {
      isModalOpen.value = true
      modalTitle.value = title
    }

    const closeModal = () => {
      isModalOpen.value = false
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
          <button @click="showModal('Register')" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Register</button>
          <!-- <button @click="showModal('Login')" class="bg-green-500 text-white px-4 py-2 rounded mr-2">Login</button> -->
        </div>
      </div>
    </nav>
    <Modal :isOpen="isModalOpen" :title="modalTitle" @close="closeModal">
      <RegisterForm v-if="modalTitle === 'Register'" />
    </Modal>
  </div>
</template>