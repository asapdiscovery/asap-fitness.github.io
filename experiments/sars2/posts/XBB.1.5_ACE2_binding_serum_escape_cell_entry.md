---
title: 'Effects of mutations in XBB.1.5 spike on ACE2 binding, serum escape and cell entry'
aside: false
author: 
    - Bernadeta Dadonaite
    - Jesse Bloom
date: 2023-11-13
github: https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS
paper: https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1
keywords:
    - XBB.1.5
    - Spike
    - Lentiviral Pseudotyping
    - ACE2 binding
    - cell entry
    - serum escape
---

# {{ $frontmatter.title }}

Study by {{ $frontmatter.author.join(', ') }}, et al. The pre-print for this study is <a v-bind:href="$frontmatter.paper">here</a>.

## Effects of mutations to XBB.1.5 spike on escape from serum antibodies, spike-mediated cell entry, and ACE2 binding

Plot below shows how mutations to XBB.1.5 spike affect ACE2 binding, XBB breakthrough sera escape, and ACE2-mediated cell entry. Serum escape data is and average escape of sera from 10 individual with who all had XBB* breakthrough infection. ACE2 binding experiments were done with monomeric ACE2. Cell entry experiments were performed using 293T cells overexpressing ACE2.  

This is is an interactive chart. Mouseover points for details and measurements, and use the top zoom bar to zoom in on specific sites. The options at the bottom let you only show escape for sites with some minimal functional effect, choose the site summary metric, or floor the escape at zero. 

The line plots at top show the escape at each site across all sera and for individual sera, and the heatmaps show the effects of individual mutations on sera escape or functions of the protein.  

Analysis by Dadonaite et al., bioRxiv, DOI [10.1101/2023.11.13.566961 (2023)](https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1).  

See [https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS](https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS) for code/data.
<Altair :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS/main/docs/htmls/summary_overlaid.html'"></Altair>


Data above was generated using lentiviral deep mutational scanning system described in [Dadonaite et al., Cell, (2023)](https://www.sciencedirect.com/science/article/pii/S0092867423001034?via%3Dihub). 