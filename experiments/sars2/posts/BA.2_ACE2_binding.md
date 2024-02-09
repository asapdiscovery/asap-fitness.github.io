---
title: 'Effects of mutations in BA.2 spike on ACE2 binding'
aside: false
author: 
    - Bernadeta Dadonaite
    - Jesse Bloom
date: 2023-11-12
github: https://github.com/dms-vep/SARS-CoV-2_Omicron_BA.2_spike_ACE2_binding/
paper: https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1
keywords:
    - BA.2
    - Spike
    - Lentiviral Pseudotyping
    - ACE2 binding
---

# {{ $frontmatter.title }}

Study by {{ $frontmatter.author.join(', ') }}, et al. The pre-print for this study is <a v-bind:href="$frontmatter.paper">here</a>.

## Effects of mutations to BA.2 spike on ACE2 binding

Plot below shows how mutations to BA.2 spike affect monomeric ACE2 binding. 

This is is an interactive chart. Mouseover points for details and use the top zoom bar to zoom in on specific sites.

Analysis by Dadonaite et al., bioRxiv, DOI [10.1101/2023.11.13.566961 (2023)](https://www.biorxiv.org/content/10.1101/2023.11.13.566961v1).  

See [https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS](https://github.com/dms-vep/SARS-CoV-2_XBB.1.5_spike_DMS) for code/data.
<Altair :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_Omicron_BA.2_spike_ACE2_binding/main/docs/htmls/monomeric_ACE2_mut_effect.html'"></Altair>


Data above was generated using lentiviral deep mutational scanning system described in [Dadonaite et al., Cell, (2023)](https://www.sciencedirect.com/science/article/pii/S0092867423001034?via%3Dihub). 