<script>
import { data as postsData } from './posts.data.js'

export default {
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
    <h2>Experiment Index</h2>
    <ul>
        <li v-for="post in filteredPosts" :key="post.id">
            <a :href="post.url">{{ post.frontmatter.title }}</a>
        </li>
    </ul>
</template>
