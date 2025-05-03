<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <!-- Mühendis Girişi -->
        <div class="max-w-md w-full space-y-8 bg-green-100 bg-opacity-95 p-12 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-green-800 text-center pb-6">Mühendis Girişi</h2>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="engineer-email" class="sr-only">E-posta adresi</label>
                <input id="engineer-email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="E-posta adresi">
              </div>
              <div>
                <label for="engineer-password" class="sr-only">Şifre</label>
                <input id="engineer-password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Şifre">
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="engineer-remember" name="remember" type="checkbox" class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded">
                <label for="engineer-remember" class="ml-2 block text-sm text-gray-900">
                  Beni hatırla
                </label>
              </div>
              <div class="text-sm p-5">
                <router-link to="/" class="font-medium text-green-600 hover:text-green-500">
                  <span>
                    Şifrenizi mi unuttunuz?
                  </span>
                </router-link>
              </div>
            </div>
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Mühendis Olarak Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Vue script setup burada kullanılabilir, ancak bu tasarım için gerekli değildir.
  // Örneğin, form gönderimini işlemek için yöntemler ekleyebilirsiniz.
  </script>
  
  <style scoped>
  /* Arka plan görselini doğrudan CSS ile ekliyoruz */
  .min-h-screen {
    background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>