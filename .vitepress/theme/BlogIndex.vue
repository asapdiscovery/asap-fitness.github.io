<script>
import DateComponent from './Date.vue'
import { data as postsData } from './posts.data.js'

export default {
    components: {
        DateComponent
    },
    computed: {
        filteredPosts() {
            // Extract the current directory name from the window location
            const currentDirectory = window.location.pathname.split('/').slice(-2, -1)[0];

            return postsData.filter(post => {
                // Extract the parent directory name from the post URL
                const parentDirectory = new URL(post.url, location.href).pathname.split('/').slice(-3, -2)[0];
                return parentDirectory === currentDirectory;
            });
        }
    },
    data() {
        return {
            posts: postsData
        }
    },
}
</script>

<template>
    <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
        <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
            <li class="py-12" v-for="(post, index) in posts" :key="index">
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

h2 {
    margin: 0;
    border-top: none;
    padding-top: 0;
}

h2 a {
    color: var(--vp-c-text-1);
}
</style>
