---
layout: doc
aside: false
dir: 'sars2'
title: SARS-CoV-2
subtext: Below are deep mutational scanning experiments of the SARS-CoV-2 Spike protein. See the details below for the best datasets for different research questions.
---

<Header :title="$frontmatter.title" :description="$frontmatter.subtext" /> 

<!-- Edit below -->

::: tip
If you want to explore all of the datasets for SARS-CoV-2, scroll to the bottom of the page.
:::

## ACE2 Binding affinity

If you're interested in the effect of mutations on ACE2 binding affinity for the most circulating variant (), check it out [here]()

## Monoclonal antibody Escape

We've measured mutation escape for the following monoclonal antibodies. Click on the antibody to explore the dataset:

- [REGNXXXX]()
- [LYCOVXXX]()

## Serum escape

We've also measured serum escape for multiple individuals with different infection histories. You can find the most relevant experiments [here]().

<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />
