---
title: 'Effects of mutations on antibody neutralization'
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
    - antibody escape
    - 25.10C
    - 12.1F
    - 37.7H
    - 25.6A
    - 37.2D
    - 8.9F
---

# {{ $frontmatter.title }}

Study by {{ $frontmatter.author.join(', ') }}, et al. The study is available <a v-bind:href="$frontmatter.paper">here</a>.

## Effects of mutations to Lassa Josiah strain glycoprotein on antibody neutralization

Plot below shows how mutations to Lassa Josiah strain glycoprotein affect antibody neutralization.   

These are interactive charts. Mouseover points for details and measurements, and use the top zoom bar to zoom in on specific sites. The options at the bottom let you apply or alter a variety of filters and viewing options, such as choosing the site summary metric, only showing escape for sites with some minimal functional effect, or choosing whether to floor the functional effects or escape at zero. 

The line plots at top of each plot show the effects of mutations at each site, and the heatmaps show the effects of individual mutations on cell entry or immune escape.  

Analysis by Carr et al., bioRxiv, DOI [https://doi.org/10.1101/2024.02.05.579020 (2024)](https://www.biorxiv.org/content/10.1101/2024.02.05.579020v1).  

See [https://github.com/dms-vep/LASV_Josiah_GP_DMS](https://github.com/dms-vep/LASV_Josiah_GP_DMS) for code/data.

### Antibody 25.10C escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/2510C_mut_effect.html'"></Altair>

### Antibody 12.1F escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/121F_mut_effect.html'"></Altair>

### Antibody 37.7H escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/377H_mut_effect.html'"></Altair>

### Antibody 25.6A escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/256A_mut_effect.html'"></Altair>

### Antibody 37.2D escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/372D_mut_effect.html'"></Altair>

### Antibody 8.9F escape plot

<Altair :spec-url="'https://dms-vep.org/LASV_Josiah_GP_DMS/htmls/89F_mut_effect.html'"></Altair>


