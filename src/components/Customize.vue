<script setup>
import { ref, watch } from 'vue';
import { CategoryData } from '../data/CategoryData';

const mainCategoryOptions = CategoryData
const subCategory1Options = ref([])
const subCategory2Options = ref([])
const subCategory3Options = ref([])
const selectedMainCategory = ref(null)
const selectedSubCategory1 = ref(null)
const selectedSubCategory2 = ref(null)
const selectedSubCategory3 = ref(null)

watch(selectedMainCategory, (newValue) => {
    subCategory1Options.value = newValue ? newValue.subcategories : []
    selectedSubCategory1.value = null
    selectedSubCategory2.value = null
    selectedSubCategory3.value = null
})
watch(selectedSubCategory1, (newValue) => {
    subCategory2Options.value = newValue ? newValue.subcategories : []
    selectedSubCategory2.value = null
    selectedSubCategory3.value = null
})
watch(selectedSubCategory2, (newValue) => {
    subCategory3Options.value = newValue ? newValue.subcategories : []
    selectedSubCategory3.value = null
})




</script>
<template>
    <main class="p-4 dark:bg-gray-800 min-h-screen">
        <div class="grid grid-cols-6 gap-4">
            <div>
                <span class="text-white text-sm font-semibold mb-2">
                    Ana Kategori
                </span>
                <select v-model="selectedMainCategory" class=" w-full p-2 border rounded text-white">
                    <option :value="null" disabled>Seciniz</option>
                    <option v-for="option in mainCategoryOptions" :key="option.id" :value="option">{{ option.name }}
                    </option>
                </select>
            </div>
            <div>
                <span class="text-white text-sm font-semibold mb-2">
                    Alt Kategori 1
                </span>
                <select v-model="selectedSubCategory1" :disabled="!selectedMainCategory"
                    class="w-full p-2 border rounded  text-white">
                    <option :value="null" disabled>Seçiniz</option>
                    <option v-for="option in subCategory1Options" :key="option.id" :value="option">{{ option.name }}
                    </option>
                </select>
            </div>
            <div>
                <span class="text-white text-sm font-semibold mb-2">
                    Ekipman/Malzeme
                </span>
                <select v-model="selectedSubCategory2" :disabled="!selectedSubCategory1"
                    class="w-full p-2 border rounded text-white">
                    <option :value="null" disabled>Seçiniz</option>
                    <option v-for="option in subCategory2Options" :key="option.id" :value="option">{{ option.name }}
                    </option>
                </select>
            </div>
            <div>
                <span class="text-white text-sm font-semibold mb-2">
                    Marka Seciniz
                </span>
                <select v-model="selectedSubCategory3" :disabled="!selectedSubCategory2"
                    class="w-full p-2 border rounded text-white">
                    <option :value="null" disabled>Seçiniz</option>
                    <option v-for="option in subCategory3Options" :key="option.id" :value="option">{{ option.name }}
                    </option>
                </select>
            </div>


        </div>


    </main>
</template>