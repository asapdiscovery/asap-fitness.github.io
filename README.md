# dms-vep.github.io

## Developing

First, clone the repository locally:

```bash
git clone git@github.com:dms-vep/dms-vep.github.io.git
cd dms-vep.github.io
```

To see a live preview of `dms-vep.github.io`, you must have `node` and `npm` installed on your machine. If you are missing one or both, follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install them.

This website is created using the static site generator [VitePress](https://vitepress.dev/). To spin up a local development server that provides a live preview of the site locally in your browser, simply run:

```bash
npm run docs:dev
```

The dev server should now be running at `http://localhost:5173`. Visit this URL in your browser to see a preview of the site.

## Deploying

The website is hosted on GitHub pages via a specific `gh-pages` branch and builds are automated using GitHub Actions via the deployment script `/.github/workflows/deploy.yml`. The website will build on `pull requests` and `pushes` to the `main` branch.
