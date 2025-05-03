<template>
    <header class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-40">
      <div class="px-4 py-3 flex items-center justify-between max-w-full lg:ml-[250px]">
        <button
          @click="$emit('toggle-sidebar')"
          class="lg:hidden w-[35px] h-[35px] flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <span class="sr-only">Menü</span>
          <div class="w-[18px] h-[14px] flex flex-col justify-between">
            <span class="h-[2px] w-full bg-gray-700 dark:bg-gray-500 rounded"></span>
            <span class="h-[2px] w-full bg-gray-700 dark:bg-gray-500 rounded"></span>
            <span class="h-[2px] w-full bg-gray-700 dark:bg-gray-500 rounded"></span>
          </div>
        </button>
  
        <!-- Search Bar -->
        <div class="hidden md:flex flex-1 max-w-md ml-4">
          <div class="relative w-full flex">
            <input 
              type="text" 
              class="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 transition-all duration-200" 
              placeholder="Ara..." 
            >
            <button class="absolute right-0 top-0 bottom-0 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-r-md transition-colors duration-200">
              Ara
            </button>
          </div>
        </div>
  
        <!-- Right side items -->
        <div class="flex items-center space-x-4">
          <!-- Wallet -->
          <button class="relative px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 text-sm transition-all duration-200">
            <span class="font-medium">Bakiye</span>
            <span class="absolute top-0 right-0 min-w-[18px] h-[18px] px-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">4</span>
          </button>
  
          <!-- Notifications -->
          <button class="relative px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 text-sm transition-all duration-200">
            <span class="font-medium">Bildirimler</span>
            <span class="absolute top-0 right-0 min-w-[18px] h-[18px] px-1.5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center translate-x-1/4 -translate-y-1/4">3</span>
          </button>
  
          <!-- Settings -->
          <button class="relative px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 text-sm transition-all duration-200">
            <span class="font-medium">Ayarlar</span>
          </button>
  
          <!-- Profile -->
          <div class="flex items-center">
            <router-link to="/EngineerLogin">
            <button class="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center text-white text-base font-semibold border-2 border-transparent hover:border-gray-300 focus:border-gray-300 transition-all duration-200">
              <span class="uppercase">U</span>
            </button>
          </router-link>
            
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
defineEmits(['toggle-sidebar']);
</script>