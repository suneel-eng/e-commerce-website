import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {

  const isSidebarVisible = ref(false)

  function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
  }

  return { isSidebarVisible, toggleSidebar }
})
