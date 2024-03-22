<template>
  <el-container>
    <el-aside>
      Aside
    </el-aside>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.el-aside {
  @apply bg-amber-100;
  width: var(--aside-width);
}

.el-header {
  @apply bg-gray-50;
  height: var(--header-height);
}

.el-main {
  @apply bg-gray-200;
  min-height: calc(100vh - var(--header-height));
}
</style>
