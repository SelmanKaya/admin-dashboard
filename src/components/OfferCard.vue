<template>
    <div :class="[
      'bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 mb-4 border-l-4 h-full flex flex-col',
      type === 'approved' ? 'border-green-500' : 'border-orange-500'
    ]">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 flex-1 whitespace-nowrap overflow-hidden text-ellipsis pr-4">
          {{ offer.title }}
        </h3>
        <span :class="[
          'px-2 py-1 rounded-full text-xs font-semibold',
          type === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400'
        ]">
          {{ offer.status }}
        </span>
      </div>
      
      <div class="flex-1 mb-5">
        <p class="text-sm text-gray-500 dark:text-gray-400 my-2">
          <span class="font-medium text-gray-600 dark:text-gray-300">Müşteri:</span> {{ offer.customer }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400 my-2">
          <span class="font-medium text-gray-600 dark:text-gray-300">Tarih:</span> {{ offer.date }}
        </p>
        <p class="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">
          {{ offer.amount }}
        </p>
      </div>
  
      <div class="flex mt-auto gap-2">
        <button 
          :class="[
            'flex-1 py-2 px-4 rounded-md text-sm font-medium text-white transition-colors duration-200',
            type === 'approved' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'
          ]"
        >
          <span v-if="type === 'approved'">Görüntüle</span>
          <span v-else>Düzenle</span>
        </button>
        
        <button class="flex-1 py-2 px-4 rounded-md text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200 transition-colors duration-200">
          <span v-if="type === 'approved'">Yazdır</span>
          <span v-else>Gönder</span>
        </button>
      </div>
    </div>
</template>

<script setup>
defineProps({
  offer: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['approved', 'draft'].includes(value)
  }
});
</script>