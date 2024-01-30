---
layout: doc
aside: false
dir: 'sars2'
title: SARS-CoV-2
subtext: Below are deep mutational scanning experiments of the SARS-CoV-2 Spike protein. See the details below for the best datasets for different research questions.
pins:
  - title: ACE2 Binding affinity
    link: /experiments/sars2/posts/delta-spike-REGN10933
    details: Here is the best data to checkout if you're interested in ACE2 Binding affinity
    linkText: Check it out!
  - title: Monoclonal Antibody Escape
    details: Here is a guide for monoclonal antibodies mapped against the most current strain
    link: /experiments/sars2/posts/XBB.1.5_ACE2_binding_serum_escape_cell_entry
    linkText: Check it out!
  - title: Serum Escape
    details: Here is a guide to human serum escape mapped against the most current strain
    link: /experiments/sars2/posts/XBB.1.5_ACE2_binding_serum_escape_cell_entry
    linkText: Check it out!
---

<Header :title="$frontmatter.title" :description="$frontmatter.subtext" /> 

<PinnedExperiments />

<!-- Edit below -->

## Here's an example...

of how you can put anything you want here. It's *just* **plain** markdown! We can use this space to add some extra information to the folks inclined to keep on scrollin'.

You can add chunks for code:

```python
 amazing_finding = analyze_dms_experiment(my_data)
```

And you can even highlight things of interest, important tips, and warnings like this:

```md
::: tip
Here's a tip for you!
:::
```

Output:

::: tip
Here's a tip for you!
:::

Overall, this section is intended as a flexible, user-defined introduction to the data available here.

<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />
