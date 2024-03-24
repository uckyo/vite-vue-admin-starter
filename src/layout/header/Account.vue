<template>
  <div class="flex items-center">
    <el-dropdown>
      <div class="cursor-pointer flex items-center">
        <el-avatar shape="square" :size="40" :src="avatarUrl" />
        <div class="mx-5">用户名</div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
const avatarUrl = "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png";
</script>

<style scoped></style>
