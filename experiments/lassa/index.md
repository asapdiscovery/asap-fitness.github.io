---
layout: doc
aside: false
dir: 'lassa'
title: Lassa
subtext: Pseudovirus deep mutational scanning of the Lassa virus glycoprotein complex (GPC).
pins:
  - title: Effects of mutations on cell entry
    link: /experiments/lassa/posts/LASV_Josiah_GPC_cell_entry
    details: Here is the best data to checkout if you're interested in effects of mutations on cell entry
    linkText: Check it out!
  - title: Effects of mutations on antibody escape
    details: Here are results from mapping neutralizing activity of monoclonal anti-GPC antibodies
    link: /experiments/lassa/posts/LASV_Josiah_GPC_antibody_escape
    linkText: Check it out!
---

<Header :title="$frontmatter.title" :description="$frontmatter.subtext" /> 

<PinnedExperiments />

<!-- Edit below -->
## Lassa Glycoprotein deep mutational scanning datasets

The pinned posts above include the most up to date data on the effects of mutations on cell entry and antibody escape for Lassa glycoprotein. For a list of all the studies using the lentiviral deep mutational scanning system for Lassa glycoprotein, see the experiments section below.
<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />
