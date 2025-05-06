<template>
    <teleport to="body">
      <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 w-1/2">
          <h2 class="text-xl mb-4">{{ title }}</h2>
          <div v-if="loading" class="text-gray-500">Yükleniyor...</div>
          <div v-else-if="error" class="text-red-500">{{ error }}</div>
          <select v-else v-model="selected" class="w-full p-2 border rounded">
            <option v-for="option in options" :key="option.id" :value="option">{{ option.name || option.title }}</option>
          </select>
          <div class="mt-4 flex justify-end space-x-2">
            <button @click="onCancel" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">İptal</button>
            <button @click="onNext" :disabled="!selected" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sonraki</button>
          </div>
        </div>
      </div>
    </teleport>
  </template>
  
  <script setup>
  ///burada pop up olusturmsutuk ama kullanilmiyor artik
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  
  const props = defineProps({
    show: Boolean,
    endpoint: String,
    title: String,
    modelValue: [String, Number]
  });
  
  const emit = defineEmits(['update:modelValue', 'next', 'cancel']);
  
  const options = ref([]);
  const selected = ref(props.modelValue);
  const loading = ref(true);
  const error = ref(null);
  
  watch(() => props.modelValue, (newVal) => {
    selected.value = newVal;
  });
  
  onMounted(async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com${props.endpoint}`);
      options.value = response.data;
    } catch (err) {
      console.error('Veri çekme hatası:', err);
      error.value = 'Veriler yüklenemedi, lütfen tekrar deneyin.';
    } finally {
      loading.value = false;
    }
  });
  
  const onNext = () => {
    emit('update:modelValue', selected.value);
    emit('next');
  };
  
  const onCancel = () => {
    emit('cancel');
  };
  </script>