---
title: 'Effects of mutations on 293T cell entry'
aside: false
author: 
    - Caleb Carr
    - Kate Crawford
date: 2024-02-06
github: https://github.com/dms-vep/LASV_Josiah_GP_DMS
paper: https://www.biorxiv.org/content/10.1101/2024.02.05.579020v1
keywords:
    - Josiah
    - Lassa glycoprotein
    - Lentiviral Pseudotyping
    - cell entry
---

# {{ $frontmatter.title }}

Study by {{ $frontmatter.author.join(', ') }}, et al. The study is available <a v-bind:href="$frontmatter.paper">here</a>.

## Effects of mutations to Lassa Josiah strain glycoprotein on entry into 293T cells

Plot below shows how mutations to Lassa Josiah strain glycoprotein affect cell entry. All experiments were performed using 293T cells.   

These are interactive charts. Mouseover points for details and measurements, and use the top zoom bar to zoom in on specific sites. The options at the bottom let you apply or alter a variety of filters and viewing options, such as choosing the site summary metric, only showing escape for sites with some minimal functional effect, or choosing whether to floor the functional effects or escape at zero. 

The line plots at top of each plot show the effects of mutations at each site, and the heatmaps show the effects of individual mutations on cell entry or immune escape.  

Analysis by Carr et al., bioRxiv, DOI [https://doi.org/10.1101/2024.02.05.579020 (2024)](https://www.biorxiv.org/content/10.1101/2024.02.05.579020v1).  

See [https://github.com/dms-vep/LASV_Josiah_GP_DMS](https://github.com/dms-vep/LASV_Josiah_GP_DMS) for code/data.

### Effects of mutations on cell entry in the Josiah strain

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/293T_entry_func_effects.html'"></Altair>


