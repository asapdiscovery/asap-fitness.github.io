<script>
import { data as postsData } from './posts.data.js'

export default {
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
        <li v-for="post in posts" :key="post.id">
            <a :href="post.url">{{ post.frontmatter.title }}</a>
        </li>
    </ul>
</template>
