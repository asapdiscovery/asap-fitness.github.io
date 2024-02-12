<script setup lang="ts">
import { useData } from 'vitepress';
import Pins from './Pins.vue'

const { frontmatter: fm } = useData()
</script>

<template>
    <div>
        <h2 class="section-header">Key Experiments</h2>
        <div class="template-container">
            <Pins v-if="fm.pins" class="VirusPins" :pins="fm.pins" />
        </div>
    </div>
</template>
  
<style>
/* .template-container {
    border-bottom: 1px solid var(--vp-c-divider);
    margin-bottom: 24px;
    padding-bottom: 48px;
} */
</style>