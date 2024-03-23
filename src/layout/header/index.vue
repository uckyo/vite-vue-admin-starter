<template>
  <el-header class="!border-b border-base border-solid flex justify-between items-center">
    <Trigger />
    <Breadcrumb class="mr-auto ml-2" />
    <div class="flex gap-4">
      <Translation />
      <Fullscreen />
      <Theme />
      <Account />
    </div>
  </el-header>
</template>

<script setup lang="ts">
import Trigger from "./Trigger.vue";
import Breadcrumb from "./Breadcrumb.vue";
import Translation from "./Translation.vue";
import Fullscreen from "./Fullscreen.vue";
import Theme from "./Theme.vue";
import Account from "./Account.vue";
</script>

<style scoped></style>
