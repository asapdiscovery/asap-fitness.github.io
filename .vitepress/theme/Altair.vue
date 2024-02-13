<script>
import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import vegaEmbed from 'vega-embed';
import { parseVegaSpecFromHTML } from './parseVegaSpec';

export default {
    name: 'VegaChart',

    props: {
        specUrl: {
            type: String,
            required: true,
        },
        showShadow: {
            type: Boolean,
            default: true,
        }
    },

    mounted() {
        this.loadChart(this.specUrl);
    },

    methods: {
        async loadChart(url) {
            try {

                // Get the path to check the file format
                const urlObj = new URL(url);
                const path = urlObj.pathname;

                // Get the response from the URL
                const response = await fetch(url);
                let spec;

                // Check if URL ends with '.html'
                if (path.endsWith('.html')) {
                    const htmlContent = await response.text();
                    spec = await parseVegaSpecFromHTML(htmlContent);
                }
                // Check if URL ends with '.json'
                else if (path.endsWith('.json')) {
                    spec = await response.json();
                }
                else {
                    console.error('Unsupported file format');
                    return;
                }

                this.renderChart(spec);
            } catch (error) {
                console.error('Error loading Vega spec:', error);
            }
        },

        renderChart(spec) {
            vegaEmbed(this.$refs.vegaContainer, spec, {
                renderer: 'canvas',
                vega,
                vegaLite,
                actions: false,
            }).then((result) => {
                // Handle the rendered view here (optional)
            }).catch(console.error);
        },
    },
};
</script>

<template>
    <div class="vega-chart-container" :class="{ 'no-box-shadow': !showShadow }" ref="vegaContainer"
        style="width: 100%; height: 100%;">
    </div>
</template>

<style>
.vega-chart-container {
    width: 100%;
    height: auto;
    overflow: auto;
    padding: 20px;
}

.vega-chart-container:not(.no-box-shadow) {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>