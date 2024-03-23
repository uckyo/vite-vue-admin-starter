<template>
  <el-icon
    size="24"
    class="cursor-pointer duration-300"
    :class="{ 'rotate-180': Menu.isCollapsed.value }"
    @click="Menu.toggle()"
  >
    <i-mdi-format-indent-decrease />
  </el-icon>
</template>

<script setup lang="ts">
import Menu from "@/hooks/useMenu.ts";
</script>

<style scoped></style>
