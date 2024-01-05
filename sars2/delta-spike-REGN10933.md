---
layout: doc
title: Delta REGN10933
authors: 
    - Bernadeta Dadonaite
    - Jesse Bloom
date: Oct 7, 2022
github: https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933
paper: https://doi.org/10.1016/j.cell.2023.02.001
---

# Deep mutational scanning of SARS-CoV-2 Delta variant spike using a barcoded lentiviral platform

Study by {{ $frontmatter.authors.join(', ') }}, et al. The pre-print for this study is <a v-bind:href="$frontmatter.paper">here</a>.

This page contains a summary of the analysis and links to important datasets. To see the code and full analysis, check out the <a v-bind:href="$frontmatter.github">GitHub repository</a>.

<!-- START EDITING HERE -->

## Analysis Overview

This analysis was run using `Snakeamke`. Below is the rulegraph for the `Snakemake` workflow.

![Image](https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/_images/rulegraph.svg)

## Analysis Notebooks

*Check out these Jupyter notebooks to see how we did the analysis*

- [Analyze PacBio CCSs]()
- [Build PacBio consensus sequences]()
- [Build the codon variants]()
- [Counts of variants]()
- [Functional scores of variants for viral entry]()
- [Fit global epistasis models]()
- [Functional effects of mutations averaged across replicates]()
- [Probabilities of escape and neutralization in antibody selections]()
- [Fit `polyclonal` models]()
- [Antibody-escape averaged across replicates]()
- [Validation neutralization assays versus `polyclonal` fits]()

## Data Files

*Here are the main data files:*

- [parental gene sequence]()
- [parental protein sequence]()
- [sequential-to-reference site numbers]()
- [codon-variant table]()
- [processed barcode sequencing runs]()
- [variant counts]()
- [functional selection experiments]()
- [mutation effects for each functional selection]()
- [mutation functional effects replicate average (observed phenotype)]()
- [mutation functional effects replicate average (latent phenotype)]()
- [antibody selection experiments]()
- [antibody escape values]()
- [sequential to reference site numbering]()

## Interactive plots

*Here are some interactive plots to explore the data:*

### Functional Effects

- [Observed phenotype effects]()
- [Latent phenotype effects]()

### Antibody Escape

- [267C escape plot]()
- [279C escape plot]()
- [REGN10933 escape plot]()

<Altair :spec-url="'https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/muteffects_latent_heatmap.html'"></Altair>
