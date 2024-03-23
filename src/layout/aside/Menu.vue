<template>
  <el-menu default-active="2" :collapse="MenuClient.isCollapsed.value" class="!border-r-0">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><IEpAddLocation /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><i-ep-aim /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><i-ep-circle-check-filled /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><i-ep-apple /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import MenuClient from "@/hooks/useMenu.ts";
</script>

<style scoped></style>
