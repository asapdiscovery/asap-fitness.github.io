<script>
import { ref, computed } from 'vue';
import DateComponent from './Date.vue';
import { data as postsData } from './posts.data.js';
import { useData } from 'vitepress';
import vSelect from "vue-select";

export default {
    components: {
        DateComponent,
        vSelect
    },
    setup() {
        const { frontmatter } = useData();
        const selectedKeywords = ref([]);

        const allKeywords = computed(() => {
            const keywords = new Set();
            postsData.forEach(post => {
                if (post.keywords) {
                    post.keywords.forEach(keyword => keywords.add(keyword));
                }
            });
            return Array.from(keywords);
        });

        const filteredPosts = computed(() => {
            const currentDirectory = window.location.pathname.split('/').slice(-2, -1)[0];

            return postsData.filter(post => {
                const parentDirectory = new URL(post.url, location.href).pathname.split('/').slice(-3, -2)[0];
                const isInCurrentDirectory = parentDirectory === currentDirectory;
                const hasSelectedKeywords = selectedKeywords.value.length === 0 ||
                    post.keywords?.some(keyword => selectedKeywords.value.includes(keyword));

                return isInCurrentDirectory && hasSelectedKeywords;
            });
        });

        return {
            frontmatter,
            selectedKeywords,
            allKeywords,
            filteredPosts
        };
    }
}
</script>


<template>
    <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {{ frontmatter.title }}
            </h1>
            <p class="description text-lg leading-7 text-gray-500 dark:text-white">
                {{ frontmatter.subtext }}
            </p>
            <v-select v-model="selectedKeywords" :options="allKeywords" multiple
                placeholder="Filter experiments by keywords">
            </v-select>
        </div>
        <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
            <li class="py-12" v-for="(post, index) in filteredPosts" :key="index">
                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <DateComponent :dateString="post.date" />
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                <a :href="post.url">{{
                                    post.title
                                }}</a>
                            </h2>
                            <div v-if="post.subtext" class="prose dark:prose-invert max-w-none" v-html="post.subtext"></div>
                            <div v-if="post.keywords" class="keywords">
                                <span><strong>Keywords: </strong></span>
                                <span v-for="(keyword, kIndex) in post.keywords" :key="kIndex">{{ keyword }}<span
                                        v-if="kIndex < post.keywords.length - 1">, </span></span>
                            </div>
                        </div>
                        <div class="text-base leading-6 font-medium">
                            <a class="link" aria-label="read more" :href="post.url">Read more →</a>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.prose a {
    color: var(--vp-c-text-2);
}

.date {
    color: var(--vp-c-text-2);
}

li {
    list-style-type: none;
}

h1 {
    font-size: 3.75rem;
    line-height: 1;
    padding-top: 0;
    font-weight: 800;
    color: var(--vp-c-text-1);
}

.description {
    color: var(--vp-c-text-1);
}

h2 {
    margin: 0;
    border-top: none;
    padding-top: 0;
}

h2 a {
    color: var(--vp-c-text-1);
}

.keywords {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}
</style>
