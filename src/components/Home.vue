<template>
    <div class="min-h-screen flex">
      <!-- Sidebar -->
      <Sidebar :isOpen="sidebarOpen" @close-sidebar="toggleSidebar" />
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col lg:ml-[250px] transition-margin duration-300">
        <!-- Header -->
        <Header class="fixed w-full top-0 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"  @toggle-sidebar="toggleSidebar" />
  
        <!-- Main -->
        <main class="flex-1 pt-[72px] p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Sidebar from './Sidebar.vue';
  import Header from './Header.vue';
  import Dashboard from './Dashboard.vue';
  
  const sidebarOpen = ref(false);
  
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
  };
  
  // Set sidebar visibility based on screen size
  const updateSidebarState = () => {
    sidebarOpen.value = window.innerWidth >= 1024; // lg breakpoint
  };
  
  // Initialize and update sidebar state on resize
  onMounted(() => {
    updateSidebarState();
    window.addEventListener('resize', updateSidebarState);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateSidebarState);
  });
  </script>