<template>
  <div class="max-w-7xl mx-auto">
    <!-- Statistic Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg border-l-4 border-blue-500 p-5">
        <div class="flex flex-col">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">35</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Onaylanmış Teklifler</p>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg border-l-4 border-orange-500 p-5">
        <div class="flex flex-col">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">12</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Taslak Teklifler</p>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 rounded-lg border-l-4 border-green-500 p-5">
        <div class="flex flex-col">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">8.450 ₺</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Bakiye</p>
        </div>
      </div>
    </div>

    <!-- Onaylanmış Teklifler Section -->
    <div class="mb-10">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Onaylanmış Teklifler</h2>
        <button class="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
          Tümünü Görüntüle
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OfferCard 
          v-for="offer in approvedOffers" 
          :key="offer.id" 
          :offer="offer" 
          type="approved"
        />
      </div>
    </div>

    <!-- Taslak Teklifler Section -->
    <div class="mb-10">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Taslak Teklifler</h2>
        <button class="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
          Tümünü Görüntüle
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OfferCard 
          v-for="offer in draftOffers" 
          :key="offer.id" 
          :offer="offer" 
          type="draft"
        />
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OfferCard from './OfferCard.vue';

const approvedOffers = ref([
{
  id: 1,
  title: 'Şirket A - Yazılım Projesi',
  date: '15.04.2023',
  amount: '24.500 ₺',
  customer: 'ABC Teknoloji Ltd. Şti.',
  status: 'Onaylandı'
},
{
  id: 2,
  title: 'XYZ Market - Donanım Yenileme',
  date: '03.04.2023',
  amount: '18.750 ₺',
  customer: 'XYZ Market Zinciri',
  status: 'Onaylandı'
},
{
  id: 3,
  title: 'Belediye Altyapı Projesi',
  date: '28.03.2023',
  amount: '156.000 ₺',
  customer: 'Belediye Başkanlığı',
  status: 'Onaylandı'
}
]);

const draftOffers = ref([
{
  id: 4,
  title: 'Cafe Zincirleri - POS Sistemleri',
  date: '10.04.2023',
  amount: '12.800 ₺',
  customer: 'Coffee & More',
  status: 'Taslak'
},
{
  id: 5,
  title: 'Hastane Otomasyon Sistemi',
  date: '05.04.2023',
  amount: '86.500 ₺',
  customer: 'Özel Sağlık Hastanesi',
  status: 'Taslak'
}
]);
</script>