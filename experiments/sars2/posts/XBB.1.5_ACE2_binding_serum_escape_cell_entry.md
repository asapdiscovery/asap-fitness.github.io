---
title: 'Effects of mutations in XBB.1.5 spike on ACE2 binding, serum escape and cell entry'
author: 
    - Bernadeta Dadonaite
    - Jesse Bloom
date: 2023-11-13
github: https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS
paper: https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1
subtext: Use this dataset for the most up to date analysis on the effects of mutations on ACE2 binding, XBB breakthrough sera escape and ACE2-mediated cell entryfor XBB.1.5 spike
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

This page contains a summary of the analysis and links to important datasets. To see the code and full analysis, check out the <a v-bind:href="$frontmatter.github">GitHub repository</a>.

---

## Effects of mutations to spike of SARS-CoV-2 XBB.1.5 on escape from serum antibodies, spike-mediated cell entry, and ACE2 binding

Plot below shows how mutations to XBB.1.5 spike affect ACE2 binding, XBB breakthrough sera escape, and ACE2-mediated cell entry. Serum escape data is and average escape of sera from 10 individual with who all had XBB* breakthrough infection. ACE2 binding experiments were done with monomeric ACE2. Cell entry experiments were performed using 293T cells overexpressing ACE2.  

This is is an interactive chart. Mouseover points for details and measurements, and use the top zoom bar to zoom in on specific sites. The options at the bottom let you only show escape for sites with some minimal functional effect, choose the site summary metric, or floor the escape at zero. 

The line plots at top show the escape at each site across all sera and for individual sera, and the heatmaps show the effects of individual mutations on sera escape or functions of the protein.  

Analysis by Dadonaite et al, bioRxiv, DOI [10.1101/2023.11.13.566961 (2023)](https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1).  

See [https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS](https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS) for code/data.
<Altair :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS/main/docs/htmls/summary_overlaid.html'"></Altair>

Heatmaps for individual sera escape can be found here:

- [Individual 1](https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/sera_493C_mediumACE2_mut_effect.html)
- [Individual 2](https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/sera_498C_mediumACE2_mut_effect.html)
- [Individual 3](https://dms-vep.org/SARS-CoV-2_XBB.1.5_spike_DMS/htmls/sera_500C_mediumACE2_mut_effect.html)
- ...


Interactive heatmap that shows only monomeric ACE2 binding data is shown below.  

<Altair :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS/main/docs/htmls/monomeric_ACE2_mut_effect.html'"></Altair>

