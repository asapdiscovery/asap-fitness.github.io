---
layout: doc
title: Methodology
---

# {{ $frontmatter.title }}

This page contains details on the methodologies used to generate the data in this website.

If you are interested in using data from these experiments, it is strongly recommended that you read the entirety of these methods, and then use the [Data format and commonly used filters](#data-format-and-commonly-used-filters) section as a guide for applying custom filters to the raw data. 

## Experimental methodologies  

### Deep mutational scanning of viral entry proteins  

[Deep mutational scanning (DMS)](https://www.nature.com/articles/nmeth.3027) refers to studying the effects of all or most mutations to a protein or sequence of interest by producing a pool of genotype-phenotype linked mutants, imposing a selection the pool of mutants, and then measuring the change in frequency of each mutation or mutant using deep sequencing. For viral entry proteins (VEPs), DMS can be performed by producing a pool of viruses that contain all possible mutations to the VEP. This virus pool can then be selected upon by attempting to infect susceptible cells, in which case only viruses with mutant VEPs still capable of accomplishing cell entry will be enriched. The virus pool could also be selected upon by incubating with an antibody before infecting cells, in which case only viruses with mutant VEPs with mutations that escape neutralization by the antibody and are still able to enter cells will be enriched. In the past, the deep sequencing used in VEP DMS to measure the change in frequencies of mutations across these selections was a [subamplicon sequencing strategy](https://jbloomlab.github.io/dms_tools2/bcsubamp.html). Difficulties in performing experiments, genotype-phenotype linking passaging steps, biosafety concerns for many viruses, and the inability of subamplicon sequencing to measure the effects of combinations of mutations in individual mutants led the Bloom Lab to develop the lentiviral vector deep mutational scanning platform to replace VEP DMS strategies that formerly used replicative viruses with full-length genomes. 

### Overview of the lentiviral vector deep mutational scanning platform  

The Bloom Lab has developed a lentiviral vector deep mutational scanning platform that can be used to perform DMS using any VEP capable of pseudotyping a lentivirus. This platform uses controlled lentivirus replication cycles and a barcode sequencing strategy to enable the measurement of the effects of single mutations or combinations of mutations in individual mutants, rather than simply measuring the change in frequency of mutations across the entire pool of mutant viruses.

The following figure is from [Radford et at., Cell Host & Microbe (2023)](https://www.sciencedirect.com/science/article/pii/S1931312823002184). Panel A of the figure shows the lentivirus genome used for deep mutational scanning. The key features that enable deep mutational scanning are the random nucleotide barcode following the VEP (in this example, HIV Envelope) and the repaired 3' LTR. The repair of the 3' LTR enables the lentivirus to undergo multiple controlled cycles of replication rather than only a single cycle. The barcode following the VEP enables the use of PacBio long read sequencing to link mutants with their unique barcode, so that only Illumina short read sequencing of the barcodes is needed in later experiments to measure mutant frequencies. The VEP is also under an inducible promoter, so the mutant VEP library is not expressed before it is induced with doxycycline during genotype-phenotype linked virus production. 

Panel B of the figure shows how genotype-phenotype linked VEP mutant libraries are made using this platform. It is a two-step process, where first the VSV-G viral entry protein is used to integrate the lentivirus genomes containing the VEP mutants and barcodes into cells at just one copy per cell, and then genotype-phenotype linked viruses are produced from these singly integrated cells. Viruses can also be produced from the singly integrated cells separately with VSV-G added, and these VSV-G pseudotyped viruses can be used to infect cells regardless of mutant VEP function to readout library composition and long read sequencing the genotype-phenotype linked mutants. 

![Image](https://ars.els-cdn.com/content/image/1-s2.0-S1931312823002184-gr1_lrg.jpg)


#### Measuring the effects of mutations on cell entry  

Once the mutant-barcode linkages are determined using long read sequencing, experiments to determine the effects of mutations on the VEP function of entry into cells are straightforward. The mutant virus library is produced from the singly integrated cells in two conditions; one condition with VSV-G added and one condition without VSV-G added. Both pools are used to separately infect susceptible cells, and the change in frequency of the mutants that successfully infect cells between the conditions is used to give each mutant a score on function. These individual mutant scores are then used to deconvolute mutation effects of individual mutations. See the [Modeling the effects of mutations on cell entry](#modeling-the-effects-of-mutations-on-cell-entry) section in the computational methods section below for details on this modeling. 

![Image](/functional_selection.png)

#### Measuring the effects of mutations on escape from neutralization by antibodies or sera  

Experiments to determine the effects of mutations on escape from antibodies or sera use an additional step of spiking in a small amount of separately produced virus only pseudotyped with VSV-G carrying known barcodes in their genomes. The mutant virus library + VSV-G standard spike-in pool is split between mock conditions with no antibody or serum and conditions with varying concentrations of antibodies or sera. Since the VSV-G standards are not neutralized by the antibodies or sera targeting the VEP of interest, the frequency of each mutant can be compared to the frequency of the standards in the mock versus antibody and serum conditions to determine the level of neutralization of each mutant in each condition. These escape scores are then used to fit a biophysical model, where each mutation has an effect on neutralization at one or more epitopes for each antibody or serum. See the [Modeling the effects of mutations on escape from antibodies and sera](#modeling-the-effects-of-mutations-on-escape-from-antibodies-and-sera) section in the computational methods section below for details on this modeling. 

![Image](/antibody_selection.png)

#### Measuring the effects of mutations on receptor binding 

Experiments to determine the effects of mutations on receptor binding are performed in the same fashion as the experiments to determine the effects of mutations on escape from neutralization by antibodies or sera, except soluble receptors are incubated with the mutant viruses rather than antibodies or sera. VEPs bound by soluble receptors will be blocked from binding cells, and these viruses will be neutralized. By incubating the mutant virus library with a wide range of soluble receptor concentrations, we can measure the effects of mutations that increase or decrease soluble receptor binding.  

## Computational methodologies  

At the end of the experimental workflow, we can calculate scores for each individual mutant for things like entry into cells, antibody escape, or receptor binding. However, we must use modeling to deconvolute these scores for each mutant into predicted effects of individual mutations or combinations of mutations. The sections below describe the general principals of the models we use do deconvolve the individual mutation effects.

### Modeling the effects of mutations on cell entry   

To deconvolve the effects of individual mutations on VEP function of entry into cells, we use [global epistasis models](https://www.pnas.org/doi/abs/10.1073/pnas.1804015115). Global epistasis models work by defining a latent, unmeasured scale of mutation effects where mutations have an additive effect on function. This latent scale can be transformed into the observed, measured scale of the effects of mutations using a non-linear function, typically similar to a sigmoid. Through these models, a significant portion of the epistasis, or non-additive effects of combinations of mutations, can be modeled as the non-linearity between the latent and observed scales. To fit this non-linearity in global epistasis models, there must be measurements of mutants with combinations of mutations, which is made possible with the lentiviral vector DMS platform. 

The functional effects of mutations reported in publications and figures is typically the predicted observed effect of each individual mutation when present by itself, unless it is labeled as the latent effect, in which case it is the predicted effect of that mutation on the additive, latent scale. 

### Modeling the effects of mutations on escape from antibodies and sera  

To deconvolve the effects of individual mutations on VEP escape from neutralization by antibodies or sera, we fit [a biophysical model](https://academic.oup.com/ve/article/8/2/veac110/6889254) where the level of neutralization at a particular concentration of antibodies or serum is determined by neutralizing activity at one or more epitopes, along with the concentration of antibodies or serum. Under this model, individual mutations have additive effects on the free energy of binding at each epitope, and the summed effects of mutations can be transformed into the fraction of virus bound at each epitope using a non-linear function, similar to global epistasis models. The product of the fraction unbound at each epitope then determines the total unbound fraction of virus. 

The escape scores of the effects of mutations at each epitope reported in publications and figures is typically the additive effect of each individual mutation on the modeled free energy of binding at that epitope. These effects can be used to predict the concentrations of antibody or serum necessary to achieve an arbitrary level of neutralization for a VEP mutant with one or more mutations (for example, an IC50 or IC80) using the fit biophysical model. These predictions are also often reported in publications to compare results to traditional neutralization assays. 

### Modeling the shifts in effects of mutations between strains  

We also use [models to compare the shifts in effects of mutations between stains of the same VEP](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10418112/). These models are essentially extensions of global epistasis models, where the latent effects of mutations between strains are compared. Since it is expected that most mutations will not have shifted effects between non-highly diverged strains, this approach includes regularization to force shifts toward being zero unless there is a high confidence in a shifted effect. 

## Data format and commonly used filters 

This section will go over commonly manipulated data formats and filters that will be useful for exploring the raw DMS data. Examples from [Carr, Crawford et at., (2024)](https://www.biorxiv.org/content/10.1101/2024.02.05.579020v1.abstract) will be used here. 

### Data formats  

Each study is accompanied by a GitHub repository and pages containing the data, analysis, and results for that study. See [here for an example GitHub repository](https://github.com/dms-vep/LASV_Josiah_GP_DMS) and [here for an example GitHub pages](https://dms-vep.org/LASV_Josiah_GP_DMS/). The same information and files can be found in each of these, but they are more intuitively organized in the GitHub pages.   

The least processed form of the data is the sequencing files in the SRA and the configuration files in the GitHub repository. The repository can be cloned and re-run to recapitulate the entire analysis. Although this should work fine after downloading the appropriate files and setting up the configuration files correctly, it is not necessary to do this for most applications. 

Some of the first outputs of the analysis for DMS selections are the scores for mutants for individual functional or antibody selections. These per-selection scores can be found in csv files in the GitHub repository and are often also linked in the GitHub pages. [Here](https://github.com/dms-vep/LASV_Josiah_GP_DMS/blob/main/results/func_scores/LibA-220706-293T-2_func_scores.csv) is an example of a file with functional effects scores. In these files, each row has information about an individual mutant, such as its barcode, amino acid mutations, and score for a functional or antibody selection. These files could be used to do things like fit models of epistasis, antibody escape models, or other models that require measurements of the effects of combinations of mutations. 

The scores of mutants in individual selections are then used by the analysis pipeline to fit models, such as global epistasis models or antibody escape models. We use [*dms-variants*](https://jbloomlab.github.io/dms_variants/) to fit global epistasis models and [*polyclonal*](https://jbloomlab.github.io/polyclonal/) to fit models of immune escape. The fit models themselves are large and are not typically housed on GitHub. To fit your own versions of these models, you can use the scores for variants from individual selections and follow the examples for fitting models in the *dms-variants* and *polyclonal* documentations. 

After fitting these models, the predictions of the effects of mutations are averaged across selections, and then reported in csv files along with some more information. [Here](https://github.com/dms-vep/LASV_Josiah_GP_DMS/blob/main/results/func_effects/averages/293T_entry_func_effects.csv) is an example of a file with average effects of mutations on function across models. [Here](https://github.com/dms-vep/LASV_Josiah_GP_DMS/blob/main/results/antibody_escape/averages/121F_mut_effect.csv) is an example of a file with the average effects of mutations on antibody escape. For each mutation, there is information about the average score, the standard deviation of the score, and the "times_seen" for that mutation, which will be explained in the next section. These average or median scores are usually the scores being reported in publications and figures. 

### Common filters across experiment types 

There are a few important filters to understand if you want to use the raw DMS data. 

The first and one of the most important filters is the "times_seen" metric. Times seen refers to how many mutants contain that particular mutation in a selection. We have very little confidence in the estimated effect of a mutations that was only observed in one or two different mutants. Because of this, the Bloom Lab almost always filters out any mutations with a times seen <3. As this filter is increased to require mutations to be observed in more mutants, the confidence in the effects of mutations increases, and correlations between replicates and independent mutant libraries will increase. However, the total number of mutations in the filtered dataset will decrease. 

The standard deviation of scores is another important metric to consider for filtering data. When scores for a mutation differ greatly between selections or between independent mutant libraries, that is a sign that the measurements for that mutation may be noisy or unreliable. This is not always true, since sometimes antibody escape mutations may have very high scores in one library but not as high but still positive scores in another library. Interactive plots made in the analysis pipeline will often display standard deviations and the scores for mutations for each independent mutant library or independent selections when moused over. 

### Experiment type specific filters

For antibody and serum escape data, it can also be useful to apply filters on mutations based on their effect on function of entry into cells. The reason for this is because poorly functioning mutants are often a very low frequency in the mock selection with no antibody, but can become a relatively high fraction of the counts just by chance in the antibody selection as most of the wildtype and mutant viruses are neutralized. By randomly going from a very low count to a relatively high fraction of the counts in some selections, these poorly functioning variants often have very noisy effects on escape from antibodies or sera. We often filter these mutations out of plots and figures by filtering out any mutations with a worse functional effect than some quantile (~.75) of stop codon effect.
