<script setup>
// Butonlara işlevsellik eklemek için buraya kod eklenebilir, örneğin:
// import { useRouter } from 'vue-router';
// const router = useRouter();
// const goToCustomerLogin = () => router.push('/customer-login');
// const goToEngineerLogin = () => router.push('/engineer-login');
</script>

<template>
  <main class="min-h-screen relative">
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center"></div>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 flex items-center justify-center min-h-screen">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-4">
        <!-- Müşteri Bölümü -->
        <div class="bg-blue-500/80 p-4 md:p-10 rounded-lg shadow-lg flex flex-col items-center justify-center text-white">
          <h2 class="text-xl md:text-2xl font-extrabold text-center mb-4">Eğer Müşteriyseniz aşağıdaki butona basarak müşteri girişi yapabilirsiniz</h2>
          <button class="bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 transition transform hover:scale-105">Müşteri Girişi</button>
        </div>
        <!-- Mühendis Bölümü -->
        <div class="bg-green-500/80 p-4 md:p-10 rounded-lg shadow-lg flex flex-col items-center justify-center text-white">
          <h2 class="text-xl md:text-2xl font-extrabold text-center mb-4">Eğer Mühendisseniz aşağıdaki butona basarak mühendis girişi yapabilirsiniz</h2>
          <button class="bg-white text-green-500 p-2 rounded-md hover:bg-green-100 transition transform hover:scale-105">Mühendis Girişi</button>
        </div>
      </div>
    </div>
  </main>
</template>