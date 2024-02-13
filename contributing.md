# Contributing

[`dms-vep.org`](https://dms-vep.org) is a repository for deep mutational scanning (DMS) studies with a focus on viral entry proteins (VEPs). The site contains a series of write-ups on individual deep mutational scanning experiments for a variety of viruses and conditions. This guide contains instructions for how to contribute your experimental write-ups.

There are three parts to this guide:

1. [Getting Started](#getting-started): How to add a new write-up and view the updated website.
2. [Writing Markdown](#writing-markdown): How to take advantage of the VitePress markdown interpreter.
3. [Style Guide](#style-guide): How to structure your experimental write-ups.

## Getting Started

[`dms-vep.org`](https://dms-vep.org) is based on the static site generator [VitePress](https://vitepress.dev/) with some additional custom components written in [Vue](https://vuejs.org/). This allows you to create fully functional web pages using [Markdown](https://www.markdownguide.org/) documents. To add a new page to the site, you simply create a markdown document in the correct directory and make a pull request to [the website repository on GitHub](https://github.com/dms-vep/dms-vep.github.io). Below are detailed instructions on how to do this.

### Setting up to contribute

Since contributions are made through [GitHub](https://github.com/dms-vep/dms-vep.github.io), the first thing you'll need to do is clone the repository locally:

```bash
git clone git@github.com:dms-vep/dms-vep.github.io.git
cd dms-vep.github.io
```

Now that you have the repository and you're in the `dms-vep.github.io` directory, you'll need to set up a few things if you want to view a live preview of the website with your local changes. You're going to need two pieces of software to do this: `Node.js` and `npm`.

`Node.js` is an environment that allows you to run Javascript code on your computer. `npm` is a package manager that contains the Javascript libraries necessary to create the website. The instructions for installing `Node` and `npm` depend on your operating system and personal preference. Follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

::: tip
If you have `conda` installed, you can use conda to install `node` and `npm`.

```bash
conda env create -f environment.yml
conda activate dms-vep.org
```
:::

To verify that `Node` and `npm` are installed, run:

```bash
node -v
npm -v
```

You should see the node and npm versions that you installed on your system.

If this is the first time you're contributing, you'll need to install all of the packages in `packages.json`. To do this, run the following command from within the repository:

```bash
npm install
```

With everything installed, you can now boot up a live preview of your local version of `dms-vep.github.io` on your browser. To do this, simply run: 

```bash
npm run docs:dev
```

Now, there will be a local version of the website running at `http://localhost:5173`. Visit this URL in your browser to see a preview of the site.

::: warning IMPORTANT
If you are developing dms-vep.org from a remote sever (not your local machine), use

```bash
npm run remote:docs:dev
```

and access the preview at the url provided under `Network`
:::

### Structure of the repository

The file structure of this website is as follows:

```bash
.
├── README.md
├── about.md
├── contributing.md
├── experiments
├── index.md
├── methodology.md
├── package-lock.json
├── package.json
└── public
```

Any file ending `*.md` is converted to a page on the site. Individual experiments are located in the `experiments/` directory.

```bash
.
├── experiments
   ├── hiv
   │   └── index.md
   ├── influenza
   │   └── index.md
   ├── lassa
   │   └── index.md
   ├── nipah
   │   └── index.md
   └── sars2
       ├── index.md
       └── posts
           ├── delta-spike-REGN10933.md
           └── omicron-spike-mABs.md
```

The landing page for a given virus is located at `experiments/<virus>/index.md`. Editing the contents of this file will determine the content of the landing page.

Experiments for a given viral protein are located in a corresponding viral subdirectory underneath another directory called `posts/`. The markdown files in the `experiments/<virus>/posts/` directory contain the write-ups for each DMS experiment.

### Adding your experiments

Fundamentally, adding an experimental write-up involves adding a new markdown file in the `experiments/<virus>/posts/` directory for your viral protein. The name of the file doesn't matter. Any markdown file you add in a posts directory will be indexed by the website on build and added as a page to the site.

However, there are some nuances to adding your experimental write-up. At the top of every markdown file, you have to add a [`YAML`](https://yaml.org/) header that contains important metadata about your experiment. Here's an example of what that header looks like:

```md
---
title: 'Deep mutational scanning of SARS-CoV-2 Delta variant spike using a barcoded lentiviral platform'
author: 
    - Bernadeta Dadonaite
    - Jesse Bloom
date: 2022-10-07
github: https://github.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933
paper: https://doi.org/10.1016/j.cell.2023.02.001
subtext: This is some test of the subtext, what's the experiment about? Here's a short plain text introduction.
keywords:
    - Delta
    - Spike
    - Lentiviral Pseudotyping
---

Then your write-up goes here...
```

Ensure that **every write-up contains the headers listed above**. These pieces of metadata will appear in the index of experiments for a given virus. The `title` will appear as the title, the `subtext` will appear as a description below the title, and the `keywords` are used to filter the write-ups listed in the index.

Finally, if this is your first time contributing to `dms-vep.github.io`, make sure to update the `public/contributors.json` file with your name and a link to a photo:

```json
[
    {
        "name": "Jesse Bloom",
        "image": "https://research.fredhutch.org/content/stripe/bloom/en/members/_jcr_content/par/labmember/image.img.jpg/1540125095310.jpg"
    },
    {
        "name": "Your Name",
        "image": "https://my/awesome/photo.jpg"
    },
    ...
```

### Updating the landing page for a protein

You can also update the landing page for a viral protein with links to the most recent datasets, specific background information, highlighted datasets, and more. To edit the content of the landing page, edit the `experiments/<virus>/index.md` file for your viral protein. Similar to adding a new post, the content of the page is written fully in markdown with a `YAML` header that determines the properties of the page. For example, here's the page for SARS-CoV-2:

```md
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
...
<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />

```

When creating a new landing page for a viral protein, use this as the template. Your custom content is added in two places. First, you can customize the `YAML` frontmatter:

```md
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
```

Make sure to follow these instructions.

- Please don't edit the values of `layout` or `aside`.
- Ensure that the value of `dir` matches the name of the parent directory of `index.md`.
- The value of `title` will appear as a header at the top of the page.
- The value of `subtext` will show up as a short description below the `title`.
- You can 'pin' specific datasets at the top of the page using the `pins` key. Please provide a short `title` and a `link` to the post that you're pinning. You can also provide a short description with the `details` key. See the SARS-CoV-2 Spike [landing page](experiments/sars2/index.md) for an example of what this looks like.

You can also edit the landing page of a virus by adding some markdown to the page just like you would for a normal experimental post. To do this, add your markdown content between the comments that indicate where you should edit:

```md
<Header :title="$frontmatter.title" :description="$frontmatter.subtext" /> 

<PinnedExperiments />

<!-- Edit below -->
Add your custom content here!
<!-- Stop editing -->

<Experiments :currentDirectory="$frontmatter.dir" />
```

## Writing Markdown

Writing in markdown for `dms-vep.github.io` is essentially the same as writing a normal markdown file with some added features. Many of these features are extensions provided by VitePress. For a detailed guide to these extensions, check out the VitePress documentation [here](https://vitepress.dev/guide/markdown). However, there are some additional features to be aware of for `dms-vep.github.io`.

### Adding images

To add images, you can use normal markdown syntax while providing a link to where an image is stored on the web. For example, here's some markdown that displays an image of the `Snakemake` rulegraph for an analysis pipeline:

```md
![Image](https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/_images/rulegraph.svg)
```

Which results in an image being displayed on the webpage like this:

![Image](https://dms-vep.github.io/SARS-CoV-2_Delta_spike_DMS_REGN10933/_images/rulegraph.svg)

### Adding `Altair` plots

To add `Altair` plots, you'll need to use a custom syntax and provide a link to either an HTML page that contains your plot (i.e. a [page like this](https://raw.githubusercontent.com/dms-vep/dms-vep-pipeline-3/main/docs/htmls/293T_ACE2_entry_latent_effects.html)), or a raw `JSON` file exported from `Altair`.

To add you're `Altair` plot simply use the following syntax:

```md
<Altair :showShadow="true" :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/main/docs/REGN10933_escape_plot.html'"></Altair>
```

Where the `:spec-url` points to either a `JSON` or `HTML` file exported from `Altair`. It's **key** that this file comes from GitHub, and that the URL points to the **raw** data (i.e. the URL starts with `https://raw.githubusercontent`).

You can also toggle whether you want to show ha shadow around your plot by setting `:showShadow` to false (i.e. `:showShadow="false"`).

The result will look something like this:

<Altair :spec-url="'https://raw.githubusercontent.com/dms-vep/SARS-CoV-2_Delta_spike_DMS_REGN10933/main/docs/REGN10933_escape_plot.html'"></Altair>

### Adding views of `dms-viz`

You can also include views of websites like `dms-viz.github.io` in your write-ups using `iframes`. These are `HTML` elements that take a URL and generate a view of that website within another website. You can use them like this:

```md
<iframe 
  src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&e=IDC508&ce=%255B%25221%2522%252C%25222%2522%255D"
  width="100%" 
  height="600px" 
  style="border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</iframe>
```

Which will result in a view of the URL provided to the `src` property of the `iframe`. The result looks like this:

<iframe 
  src="https://dms-viz.github.io/v0/?data=https%3A%2F%2Fraw.githubusercontent.com%2Fdms-viz%2Fconfigure_dms_viz%2Fmain%2Ftests%2FHIV-Envelope-BF520-DMS%2Foutput%2FHIV-Envelope-BF520-DMS.json&e=IDC508&ce=%255B%25221%2522%252C%25222%2522%255D"
  width="100%" 
  height="600px" 
  style="border:0; margin: 0 auto; display: block; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</iframe>

You can simply copy this code and replace the URL with the URL to your website of choice.