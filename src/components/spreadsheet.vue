<template>
    <div class="p-4 dark:bg-gray-800 min-h-screen">
      <h2 class="text-2xl font-bold mb-4 text-white">Makine Mühendisliği Veri Tablosu</h2>
      <div class="flex justify-end gap-4 mb-4">
        <button @click="startAddingRow" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Yeni Satır Ekle</button>
        <button @click="exportTable" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">CSV Olarak Dışa Aktar</button>
      </div>
      <ModalDialog v-model="selectedCategory" :show="currentStep === 1" :endpoint="'/users'" title="Kategori Seçin" @next="goToStep(2)" @cancel="cancelAddingRow" />
      <ModalDialog v-model="selectedSupplier" :show="currentStep === 2" :endpoint="'/posts'" title="Tedarikçi Seçin" @next="goToStep(3)" @cancel="cancelAddingRow" />
      <ModalDialog v-model="selectedMaterial" :show="currentStep === 3" :endpoint="'/albums'" title="Malzeme Seçin" @next="goToStep(4)" @cancel="cancelAddingRow" />
      <ModalDialog v-model="selectedFinish" :show="currentStep === 4" :endpoint="'/todos'" title="Bitirme Seçin" @next="addRow" @cancel="cancelAddingRow" />
      <HotTable ref="hotTable" :settings="hotSettings" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { HotTable } from '@handsontable/vue3';
  import 'handsontable/dist/handsontable.full.css';
  import { registerAllModules } from 'handsontable/registry';
  import ModalDialog from './ModalDialog.vue';
  import axios from 'axios';
  
  // Tüm Handsontable modüllerini kaydet
  registerAllModules();
  
  // Bilgi çekme fonksiyonları
  const fetchCategoryName = async (id) => {
    if (!id) return 'Bilinmeyen';
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      return response.data.name || 'Bilinmeyen';
    } catch (err) {
      console.error('Kategori adı çekme hatası:', err);
      return 'Bilinmeyen';
    }
  };
  
  const fetchSupplierTitle = async (id) => {
    if (!id) return 'Bilinmeyen';
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data.title || 'Bilinmeyen';
    } catch (err) {
      console.error('Tedarikçi başlığı çekme hatası:', err);
      return 'Bilinmeyen';
    }
  };
  
  const fetchMaterialTitle = async (id) => {
    if (!id) return 'Bilinmeyen';
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
      return response.data.title || 'Bilinmeyen';
    } catch (err) {
      console.error('Malzeme başlığı çekme hatası:', err);
      return 'Bilinmeyen';
    }
  };
  
  const fetchFinishTitle = async (id) => {
    if (!id) return 'Bilinmeyen';
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      return response.data.title || 'Bilinmeyen';
    } catch (err) {
      console.error('Bitirme başlığı çekme hatası:', err);
      return 'Bilinmeyen';
    }
  };
  
  // Durum yönetimi
  const currentStep = ref(0);
  const selectedCategory = ref(null);
  const selectedSupplier = ref(null);
  const selectedMaterial = ref(null);
  const selectedFinish = ref(null);
  
  // Tablo ayarları
  const hotSettings = ref({
    data: [],
    columns: [
      { data: 'category', title: 'Kategori' },
      { data: 'supplier', title: 'Tedarikçi' },
      { data: 'material', title: 'Malzeme' },
      { data: 'finish', title: 'Bitirme' }
    ],
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    licenseKey: 'non-commercial-and-evaluation',
    height: 'auto',
    minCols: 4
  });
  
  const hotTable = ref(null);
  
  // Yeni satır ekleme
  const startAddingRow = () => {
    currentStep.value = 1;
  };
  
  // Modal adım geçişleri
  const goToStep = (step) => {
    currentStep.value = step;
  };
  
  // Satır ekleme (async)
  const addRow = () => {
  const categoryName = selectedCategory.value ? selectedCategory.value.name : 'Bilinmeyen';
  const supplierTitle = selectedSupplier.value ? selectedSupplier.value.title : 'Bilinmeyen';
  const materialTitle = selectedMaterial.value ? selectedMaterial.value.title : 'Bilinmeyen';
  const finishTitle = selectedFinish.value ? selectedFinish.value.title : 'Bilinmeyen';
  hotSettings.value.data.push({
    category: categoryName,
    supplier: supplierTitle,
    material: materialTitle,
    finish: finishTitle
  });
  resetSelections();
};
  
  // İptal işlemi
  const cancelAddingRow = () => {
    resetSelections();
  };
  
  // Seçimleri sıfırlama
  const resetSelections = () => {
    selectedCategory.value = null;
    selectedSupplier.value = null;
    selectedMaterial.value = null;
    selectedFinish.value = null;
    currentStep.value = 0;
  };
  
  // CSV dışa aktarma
  const exportTable = () => {
    if (hotTable.value) {
      hotTable.value.hotInstance.getPlugin('exportFile').downloadFile('csv', { filename: 'muhendislik_verileri' });
    } else {
      console.error('Tablo örneği bulunamadı.');
    }
  };
  </script>