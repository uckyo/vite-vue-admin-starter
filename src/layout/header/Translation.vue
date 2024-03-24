<template>
  <el-dropdown @command="changeLocal">
    <i-mdi-google-translate class="translation" style="font-size: 1.6em" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">english</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const changeLocal = (command: string) => {
  locale.value = command;
};
</script>

<style lang="postcss" scoped>
.translation {
  @apply cursor-pointer text-gray-500 mx-1 hover:text-gray-800 duration-500;
}

@media screen and (max-width: 768px) {
  .translation {
    display: none;
  }
}
</style>
