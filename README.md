# Honest Biscuits Website
This repo contains the [website](https://honest-biscuits.netlify.com) for [Honest Biscuits](https://honestbiscuits.com) which is built with [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://netlifycms.org).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://netlify.com) for continuous deployment, and CDN distribution. "It's a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience."

## Getting Started
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/honestbiscuits/honestbiscuits-gbn)

### Prerequisites
* [Node.js ≥8.x](https://nodejs.org/en/download/releases/)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Develop Locally

```sh
gatsby new [SITE_DIRECTORY_NAME] https://github.com/honestbiscuits/honestbiscuits/
cd [SITE_DIRECTORY_NAME]
npm run predev
npm run develop
```

### Serve Locally
```sh
gatsby new [SITE_DIRECTORY_NAME] https://github.com/honestbiscuits/honestbiscuits/
cd [SITE_DIRECTORY_NAME]
npm run serve
```

### Create new blog frontmatter from command line
The script, `newblog.sh`, is an easier way to create blogs while developing locally. The Netlify CMS won't be available while developing locally via `localhost:8000`. Running `sh newblog.sh` will prompt for a date, title, and description. The input will be saved to a new markdown file located in `./src/pages/blog/` with a slugified filename from the title input, e.g. "New Blog Post Title" becomes `./src/pages/blog/new-blog-post-title.md`. The default markdown/HTML body is ready for editing.

All "blog images" should be **properly sized** (≥400px – ≤800px) and **properly optimized** (use a service like [Cloudinary](https://demo.cloudinary.com/auto-quality), [Cloudinary's "Responsive Breakpoints"](http://www.responsivebreakpoints.com/), or [Compressor.io](https://compressor.io/), other options: imagemin, pngquant, gifsicle, etc.). All static file assets should be be placed in `./static/uploads/`, files located here will be made available in the Netlify CMS.

When adding images to blog posts use `<img src="/uploads/imagename.jpg" class="img-fluid" alt="Image Description" />` or `![/uploads/imagename.jpg](Image Description)`, the former is preferred as additional CSS/SASS can be applied.

### Configuration Details
* Main configuration is done via `gatsby-config.js`, `gatsby-node.js`, with additional configuration metadata loaded via `config.js`
* The initial entry point for the Gatsby site is located in `./src/layouts/`
* Styling is handled by loading Bootstrap 4 SASS `./src/layouts/index.scss`
  - Two Google Fonts are self-hosted via npm and loaded directly via SASS
  - WebFonts are available via WebFontLoader
* There are two types of templates available
  - Pages `./src/pages/`
    - Can be coded directly `page-name.js`
    - Can also be generated via Markdown `/page-name/index.md`
  - Blogs `./src/pages/blog/`
    - Filename via Title (slug, auto-generated via Netlify CMS, 250 character limit) `blog-name.md`
    - Additional description field
    - Created via Markdown which can include HTML
* Indiviual components used across main layout and both templates can be found in `./src/components/`
* Additional helper utilities located in `./src/utils/`
* During the "build" phase, all assets stored in `./static/` will be copied relative to the site root `./public/`, files uploaded via Netlify CMS will be stored in `./static/uploads/` and will be hosted and available at `/uploads/`

### Website Specific Notes

Google Map iFrame
```html
<iframe
  title="Honest Biscuits Google Map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d672.4614807614115!2d-122.34354181599461!3d47.60968556929725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab257f7d301%3A0x5b7dedb1cdfd9c2c!2sHonest+Biscuits!5e0!3m2!1sen!2sus!4v1523337276653"
  width="420"
  height="420"
  frameBorder="0"
  allowFullScreen
/>
```

Google Static Map URL
```
https://maps.googleapis.com/maps/api/staticmap?center=Honest+Biscuits+1901+Western+Avenue+Seattle,+WA+98101&zoom=18&scale=2&size=420x420
```
