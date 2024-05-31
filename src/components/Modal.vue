<template>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center content-around items-center">
        <div class="bg-white p-4 rounded-lg shadow-lg w-1/8">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">{{ title }}</h2>
                <button v-on:click="closeModal()" class="text-gray-600 hover:text-gray-900">&times;</button>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'Modal',
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    emits: ['close'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
})
</script>