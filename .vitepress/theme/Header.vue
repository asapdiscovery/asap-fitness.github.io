<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
        <div class="pt-6 space-y-2 md:space-y-5">
            <h1>
                {{ title }}
            </h1>
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 3.75rem;
    line-height: 1;
    padding-top: 0;
    font-weight: 800;
    color: var(--vp-c-text-1);
}
</style>
