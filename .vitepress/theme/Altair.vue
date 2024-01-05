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
        }
    },

    mounted() {
        this.loadChart(this.specUrl);
    },

    methods: {
        async loadChart(url) {
            try {
                const response = await fetch(url);
                let spec;

                // Check if URL ends with '.html'
                if (url.endsWith('.html')) {
                    const htmlContent = await response.text();
                    spec = await parseVegaSpecFromHTML(htmlContent);
                }
                // Check if URL ends with '.json'
                else if (url.endsWith('.json')) {
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
    <div class="vega-chart-container" ref="vegaContainer">
        <div ref="vegaContainer" style="width: 100%; height: 100%;"></div>
    </div>
</template>

<style>
.vega-chart-container {
    width: 100%;
    height: auto;
    overflow: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    padding: 20px;
}
</style>