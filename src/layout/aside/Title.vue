<template>
  <div class="h-[60px] p-5 flex items-center justify-center cursor-pointer">
    <div>
      <img class="w-7 h-7 mr-2" :src="Logo" alt="logo" />
    </div>
    <div
      :class="MenuClient.isCollapsed.value ? 'w-0' : 'w-full'"
      class="flex-1 duration-500 text-base font-bold truncate"
    >
      Title 1111111
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/vue.svg";
import MenuClient from "@/hooks/useMenu.ts";
</script>

<style scoped></style>
