---
title: 'Effects of mutations on escape from CD4-binding-site targeting antibodies and human sera'
aside: false
author: 
    - Caelan Radford
    - Jesse Bloom
date: 2023-07-12
github: https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera
paper: sciencedirect.com/science/article/pii/S1931312823002184
keywords:
    - BF520
    - HIV Envelope
    - 1-18
    - 3BNC117
    - PGT151
    - Lentiviral Pseudotyping
    - cell entry
    - serum escape
---

# {{ $frontmatter.title }}

Study by {{ $frontmatter.author.join(', ') }}, et al. The study is available <a v-bind:href="$frontmatter.paper">here</a>.

## Effects of mutations to BF520 HIV Envelope on entry into cells and escape from CD4-binding-site targeting antibodies and human sera

Plot below shows how mutations to BF520 HIV Envelope affect cell entry, escape from CD4-binding-site targeting antibodies, and escape from CD4-binding-site targeting human sera. All experiments were performed using TZM-bl cells.   

These are interactive charts. Mouseover points for details and measurements, and use the top zoom bar to zoom in on specific sites. The options at the bottom let you apply or alter a variety of filters and viewing options, such as choosing the site summary metric, only showing escape for sites with some minimal functional effect, or choosing whether to floor the functional effects or escape at zero. 

The line plots at top of each plot show the effects of mutations at each site, and the heatmaps show the effects of individual mutations on cell entry or immune escape.  

Analysis by Radford et al., Cell Host & Microbe, DOI [10.1016/j.chom.2023.05.025 (2023)](https://www.sciencedirect.com/science/article/pii/S1931312823002184).  

See [https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera](https://github.com/dms-vep/HIV_Envelope_BF520_DMS_CD4bs_sera) for code/data.

### Effects of mutations on cell entry in the BF520 strain

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/muteffects_observed_heatmap.html'"></Altair>

### Antibody 1-18 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/1-18_escape_plot.html'"></Altair>

### Antibody 3BNC117 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/3BNC117_escape_plot.html'"></Altair>

### Serum IDC561 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/IDC561_escape_plot.html'"></Altair>

### Serum IDC513 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/IDC513_escape_plot.html'"></Altair>

### Serum IDC508 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/IDC508_escape_plot.html'"></Altair>

### Serum IDF033 escape plot  

<Altair :spec-url="'https://dms-vep.org/HIV_Envelope_BF520_DMS_CD4bs_sera/IDF033_escape_plot.html'"></Altair>


