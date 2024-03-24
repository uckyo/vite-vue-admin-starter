<template>
  <div
    style="font-size: 1.4em"
    class="cursor-pointer hover:rotate-90 duration-500"
    @click="toggleDark()"
  >
    <i-mdi-white-balance-sunny v-if="!isDark" />
    <i-mdi-weather-night v-else />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "@/hooks/useTheme.ts";

const { isDark, toggleDark } = useTheme();
</script>

<style scoped></style>
