---
layout: doc
aside: false
dir: 'sars2'
title: SARS-CoV-2
subtext: Deep mutational scanning of the SARS-CoV-2 spike.
pins:
  - title: Serum escape, ACE2 binding and ACE2-mediated cell entry
    details: Effects of mutations to XBB.1.5 spike on serum escape, ACE2 binding and ACE2-mediated cell entry measured using lentiviral deep mutational scanning
    link: /experiments/sars2/posts/XBB.1.5_ACE2_binding_serum_escape_cell_entry
    linkText: Click here!
---

<Header :title="$frontmatter.title" :description="$frontmatter.subtext" /> 

<PinnedExperiments />

<!-- Edit below -->

## SARS-CoV-2 lentiviral deep mutational scanning datasets

The pinned posts above include the most up to date data on the effects of mutations on various SARS-CoV-2 spike phenotypes. For datasets related to other studies using lentiviral deep mutational scanning system for spike see experiments section below.

<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />
