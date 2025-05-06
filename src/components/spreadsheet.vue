<template>
  <div class="p-4 dark:bg-gray-800 min-h-screen">
    <h2 class="text-2xl font-bold mb-4 text-white">Makine Mühendisliği Veri Tablosu</h2>
    <div class="flex justify-end gap-4 mb-4">
      <button @click="exportTable" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">CSV Olarak Dışa
        Aktar</button>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-white">Ana Kategori</label>
      <select v-model="selectedMainCategory" class="w-full p-2 border rounded text-white">
        <option :value="null" disabled>Seçiniz</option>
        <option v-for="option in mainCategoryOptions" :key="option.id" :value="option">{{ option.name }}</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-white">Alt Kategori 1</label>
      <select v-model="selectedSubCategory1" :disabled="!selectedMainCategory"
        class="w-full p-2 border rounded  text-white">
        <option :value="null" disabled>Seçiniz</option>
        <option v-for="option in subCategory1Options" :key="option.id" :value="option">{{ option.name }}</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-white">Ekipman/Malzeme</label>
      <select v-model="selectedSubCategory2" :disabled="!selectedSubCategory1"
        class="w-full p-2 border rounded text-white">
        <option :value="null" disabled>Seçiniz</option>
        <option v-for="option in subCategory2Options" :key="option.id" :value="option">{{ option.name }}</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-white">Marka Seciniz</label>
      <select v-model="selectedSubCategory3" :disabled="!selectedSubCategory2"
        class="w-full p-2 border rounded text-white">
        <option :value="null" disabled>Seçiniz</option>
        <option v-for="option in subCategory3Options" :key="option.id" :value="option">{{ option.name }}</option>
      </select>
    </div>
    <div class="max-w-md mx-auto mb-6 p-4 bg-gray-500 rounded-xl shadow-lg">
      <h3 class="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Seçilen Değerler</h3>
      <div class="space-y-3 text-sm text-white">
        <div class="flex justify-between">
          <span class="font-medium text-gray-300">Ana Kategori:</span>
          <span>{{ selectedMainCategory ? selectedMainCategory.name : 'Seçilmedi' }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-300">Alt Kategori 1:</span>
          <span>{{ selectedSubCategory1 ? selectedSubCategory1.name : 'Seçilmedi' }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-300">Ekipman/Malzeme:</span>
          <span>{{ selectedSubCategory2 ? selectedSubCategory2.name : 'Seçilmedi' }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-300">Marka:</span>
          <span>{{ selectedSubCategory3 ? selectedSubCategory3.name : 'Seçilmedi' }}</span>
        </div>
      </div>
    </div>


    <button @click="addRow"
      :disabled="!selectedMainCategory || !selectedSubCategory1 || !selectedSubCategory2 || !selectedSubCategory3"
      class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Satır Ekle</button>
    <HotTable ref="hotTable" :settings="hotSettings" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { HotTable } from '@handsontable/vue3';
import 'handsontable/dist/handsontable.full.css';
import { registerAllModules } from 'handsontable/registry';
import { CategoryData } from '../data/CategoryData';

// Tüm Handsontable modüllerini kaydet
registerAllModules();

// Tablo ayarları
const hotSettings = ref({
  data: [],
  columns: [
    { data: 'mainCategory', title: 'Ana Kategori' },
    { data: 'subCategory1', title: 'Alt Kategori 1' },
    { data: 'subCategory2', title: 'Ekipman/Malzeme' },
    { data: 'subCategory3', title: 'Marka' }
  ],
  colHeaders: true,
  rowHeaders: true,
  stretchH: 'all',
  licenseKey: 'non-commercial-and-evaluation',
  height: 'auto',
  minCols: 4
});

const hotTable = ref(null);

// Seçimler ve seçenekler
const mainCategoryOptions = CategoryData;
const subCategory1Options = ref([]);
const subCategory2Options = ref([]);
const subCategory3Options = ref([]);
const selectedMainCategory = ref(null);
const selectedSubCategory1 = ref(null);
const selectedSubCategory2 = ref(null);
const selectedSubCategory3 = ref(null);

// Ana kategori değiştiğinde
watch(selectedMainCategory, (newVal) => {
  subCategory1Options.value = newVal ? newVal.subcategories : [];
  selectedSubCategory1.value = null;
  selectedSubCategory2.value = null;
  selectedSubCategory3.value = null;
});

// Alt kategori 1 değiştiğinde
watch(selectedSubCategory1, (newVal) => {
  subCategory2Options.value = newVal ? newVal.subcategories : [];
  selectedSubCategory2.value = null;
  selectedSubCategory3.value = null;
});

// Alt kategori 2 değiştiğinde
watch(selectedSubCategory2, (newVal) => {
  subCategory3Options.value = newVal ? newVal.subcategories : [];
  selectedSubCategory3.value = null;
});

// Satır ekleme
const addRow = () => {
  if (selectedMainCategory.value && selectedSubCategory1.value && selectedSubCategory2.value && selectedSubCategory3.value) {
    hotSettings.value.data.push({
      mainCategory: selectedMainCategory.value.name,
      subCategory1: selectedSubCategory1.value.name,
      subCategory2: selectedSubCategory2.value.name,
      subCategory3: selectedSubCategory3.value.name
    });
    // Seçimleri sıfırla
    selectedMainCategory.value = null;
    selectedSubCategory1.value = null;
    selectedSubCategory2.value = null;
    selectedSubCategory3.value = null;
  }
};

// CSV dışa aktarma
const exportTable = () => {
  if (hotTable.value) {
    // Hata ayıklama: Dışa aktarma öncesi tablo verilerini konsola yazdır
    console.log('Dışa aktarılacak tablo verileri:', hotSettings.value.data);
    hotTable.value.hotInstance.getPlugin('exportFile').downloadFile('csv', {
      filename: 'muhendislik_verileri',
      columnHeaders: true,
      exportHiddenRows: true,
      exportHiddenColumns: true
    });
  } else {
    console.error('Tablo örneği bulunamadı.');
  }
};
</script>