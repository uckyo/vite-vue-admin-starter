<template>
  <el-aside
    :class="MenuClient.isCollapsed.value ? '!w-[70px]' : '!w-[250px]'"
    class="border-r border-base duration-500"
  >
    <Title />
    <Menu />
  </el-aside>
</template>

<script setup lang="ts">
import Title from "./Title.vue";
import Menu from "./Menu.vue";
import MenuClient from "@/hooks/useMenu.ts";
</script>

<style scoped></style>
