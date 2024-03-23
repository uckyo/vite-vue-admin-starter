<template>
  <el-container class="h-screen w-full font-sans">
    <Aside />
    <el-container direction="vertical">
      <Header />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Aside from "@/layout/aside/index.vue";
import Header from "@/layout/header/index.vue";
</script>

<style lang="postcss" scoped></style>
