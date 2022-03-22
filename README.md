# Mini Site
This is a static site build powered by eleventy. The compiled site is in `/_site`, don't touch these files.  Everything else is fair game.  The base pages are the `.html` files in the project root.


## Installation
Install the dev environment build tools:
`npm i`

## Development
`npm run start`
This starts a browsersync session and hot-reloads the site in-browser when you edit a source file.

### Assets
In the project root, you'll find a dir `/assets` these files are copied into `/_site` whenever source file is changed.  Responsive images are generated on-the-fly, and we want to keep them separate from the source images.  

### Style
SCSS files are in `/sass`

### Images
Put any images you need in `/assets/img/`.  Use them in the templates via the shortcode: `{% image  'filename.jpg', 'alt text describing the image', 'your-image-class-name' %}`

## Deploy via Cloudflare Pages

### Add Domain
*This step will only be necessary if you need to add a new domain.  Sometimes the domain will already be present, and you only need to connect it to the Page.*

- Log in to [Cloudflare](https://dash.cloudflare.com/)
- Go to "Websites"
- Click __Add a Site__
- Type in the name of the domain, click __Add site__
- Choose the free plan, click through to add the domain.

### Link Repo
- Log in to [Cloudflare](https://dash.cloudflare.com/)
- Go to "Pages"
- Click __Create a Project__
- Connect via __GitLab__
- Under *GitLab Account*, select __Unite Life__ 
- Select the proper repo, click __Begin Setup__
- Under *Framework Preset*, select __Eleventy__.  Leave everything else in the default state.
- Click __Save and Deploy__

### Add Custom Domain
- After the page has built and deployed, go to that page's settings and add a __Custom Domain__.
- Click __Set up a custom domain__ and enter the name of a domain currently avaialble in the "Websites" section. Click __Continue__.
- After the domain connects, click __Activate domain__
- Go to that domain in the "Websites" section.  Check the DNS records to verify the record is added.
- Add a CNAME record directing "www" to the same url as "@": {{ title }}.pages.dev
