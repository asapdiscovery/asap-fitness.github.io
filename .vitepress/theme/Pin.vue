<!-- Based on VPFeature (https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFeature.vue) -->

<script setup>
defineProps({
    title: String,
    details: String,
    link: String,
    linkText: String,

});
</script>

<template>
    <a :href="link" class="Pin">
        <article class="box">
            <i class="bi bi-pin-angle pin-icon"></i>
            <div class="title" v-html="title"></div>
            <p v-if="details" class="details" v-html="details"></p>
            <div v-if="linkText" class="link-text">
                <p class="link-text-value">
                    {{ linkText }}
                </p>
            </div>
        </article>
    </a>
</template>

<style scoped>
.Pin {
    display: block;
    text-decoration: none;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
}

.box {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 100%;
}

.pin-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.details {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.link-text {
    padding-top: 8px;
}

.link-text-value {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
}
</style>