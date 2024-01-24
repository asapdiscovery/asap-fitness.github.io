<script>
import { ref, computed } from 'vue';
import { data as postsData } from './posts.data.js';
import { useData } from 'vitepress';
import DateComponent from './Date.vue';

export default {
    components: {
        DateComponent,
    },
    props: {
        currentDirectory: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const { frontmatter } = useData();
        const selectedKeywords = ref([]);
        const collapsed = ref(true);
        const allKeywords = computed(() => {
            const keywords = new Set();
            postsData.forEach(post => {
                if (post.keywords) {
                    post.keywords.forEach(keyword => keywords.add(keyword));
                }
            });
            return Array.from(keywords);
        });
        const toggleVisibility = () => {
            // Toggle the value of the 'collapsed' variable when the button is clicked
            collapsed.value = !collapsed.value;
        };

        const filteredPosts = computed(() => {
            const currentDirectory = props.currentDirectory;
            console.log(currentDirectory);

            return postsData.filter(post => {
                const parentDirectory = post.url.split('/').slice(-3, -2)[0];
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
            filteredPosts,
            currentDirectory: props.currentDirectory,
            collapsed,
            toggleVisibility
        };
    }
}
</script>


<template>
    <div>
        <h2 class="title-section">Explore all {{ frontmatter.title }} experiments</h2>
        <p>See below to explore all experiments for {{ frontmatter.title }}. You can use the select box to filter the
            experiments by
            keyword.</p>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mb-4 rounded-full inline-flex items-center"
            @click="toggleVisibility">
            <span v-if="collapsed">See experiments</span>
            <span v-if="!collapsed">Hide experiments</span>
            <svg v-if="collapsed" class="fill-current w-4 h-4 ml-1" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 199.2 199.2"
                xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <path
                            d="M173.811,119.9c-1.7-4.2-5.8-6.9-10.3-6.9h-22V11.1c0-6.1-4.9-11.1-11.1-11.1h-61.2 c-6.1,0-11.1,4.9-11.1,11.1V113h-22.4c-4.5,0-8.5,2.7-10.3,6.9c-1.7,4.2-0.8,8.9,2.4,12.1l63.9,63.9c2.2,2.2,5,3.3,7.9,3.3 c2.8,0,5.7-1.1,7.9-3.3l63.9-63.9C174.511,128.8,175.511,124,173.811,119.9z">
                        </path>
                    </g>
                </g>
            </svg>
            <svg v-if="!collapsed" class="fill-current w-4 h-4 ml-1" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 199.2 199.2"
                xml:space="preserve" fill="#000000" transform="rotate(180)">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <path
                            d="M173.811,119.9c-1.7-4.2-5.8-6.9-10.3-6.9h-22V11.1c0-6.1-4.9-11.1-11.1-11.1h-61.2 c-6.1,0-11.1,4.9-11.1,11.1V113h-22.4c-4.5,0-8.5,2.7-10.3,6.9c-1.7,4.2-0.8,8.9,2.4,12.1l63.9,63.9c2.2,2.2,5,3.3,7.9,3.3 c2.8,0,5.7-1.1,7.9-3.3l63.9-63.9C174.511,128.8,175.511,124,173.811,119.9z">
                        </path>
                    </g>
                </g>
            </svg>
        </button>
        <div v-if="!collapsed">
            <v-select class="mt-4" v-model="selectedKeywords" :options="allKeywords" multiple
                placeholder="Filter experiments by keywords">
            </v-select>
            <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
                <li class="py-8" v-for="(post, index) in filteredPosts" :key="index">
                    <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                        <DateComponent :dateString="post.date" />
                        <div class="space-y-5 xl:col-span-3">
                            <div class="space-y-6">
                                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                    <a :href="post.url">{{
                                        post.title
                                    }}</a>
                                </h2>
                                <div v-if="post.subtext" class="prose dark:prose-invert max-w-none" v-html="post.subtext">
                                </div>
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

.description {
    color: var(--vp-c-text-1);
}

article h2 {
    margin: 0;
    border-top: none;
    padding-top: 0;
}

article h2 a {
    margin: 0;
    border-top: none;
    padding-top: 0;
    color: var(--vp-c-text-1);
}

.keywords {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

:deep(.vs__dropdown-menu) {
    background-color: var(--vp-c-bg);
}
</style>
