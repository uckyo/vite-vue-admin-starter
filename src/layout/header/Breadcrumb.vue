<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>工作台</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style scoped></style>
