<template>
  <div>
    <aside :class="[
      'w-[250px] h-full fixed top-0 left-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 z-50',
      { 'translate-x-0': isOpen, '-translate-x-full': !isOpen }
    ]" aria-label="Sidebar">
      <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center">
          <span class="text-xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
        </div>
        <button 
          @click="$emit('close-sidebar')" 
          class="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 p-1 rounded-md"
        >
          <span class="sr-only">Kapat</span>
          <span class="font-bold">✕</span>
        </button>
      </div>
      <div class="flex-1 px-3 py-4 overflow-y-auto">
        <ul class="space-y-1">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link :to="index === 0 ? '/spreadsheet' : '#'" :class="[
              'block px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200',
              { 'bg-blue-500 text-white font-medium': item.active }
            ]">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
defineProps({
isOpen: {
  type: Boolean,
  default: false
}
});

defineEmits(['close-sidebar']);

const navItems = [
{
  name: 'Teklif Olustur',
  active: false
},
{
  name: 'Tekliflerim',
  active: false
},
{
  name: 'Markalar',
  active: false
},
{
  name: 'FiyatListeleri',
  active: false
},
{
  name: 'Ozellestirme',
  active: false
},
{
  name: 'Hesap Islemleri',
  active: false
},
{
  name: 'Bakiye Yukleme',
  active: false
},
{
  name: 'Hesap Hareketleri',
  active: false
},
{
  name: 'Faturalar',
  active: false
},
{
  name: 'Kullanicilar',
  active: false
},
{
  name: 'Sube Muhendis',
  active: false
},
{
  name: 'Teklif Raporu',
  active: false
}
];
</script>