
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/de469d7d-620b-4fbd-9cc1-fba3586e732c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/de469d7d-620b-4fbd-9cc1-fba3586e732c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploying to Netlify

1. **Create a Netlify account**
   - Sign up at [netlify.com](https://netlify.com) if you don't have an account

2. **Deploy from Git repository**
   - Log in to Netlify
   - Click "Add new site" > "Import an existing project"
   - Connect to your Git provider (GitHub, GitLab, etc.)
   - Select this repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Click "Deploy site"

3. **Manual deploy**
   Alternatively, you can deploy manually:
   ```sh
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Build your project
   npm run build
   
   # Deploy to Netlify
   netlify deploy --prod
   ```

### Connecting GoDaddy domain to Netlify

1. **Add custom domain in Netlify**
   - Go to your Netlify site dashboard
   - Navigate to "Domain settings" or "Domain management"
   - Click "Add custom domain"
   - Enter your GoDaddy domain name and follow the verification steps

2. **Update DNS settings in GoDaddy**
   - Log in to your GoDaddy account
   - Go to "My Products" > select your domain
   - Click "DNS" or "Manage DNS"
   - You need to configure your DNS records to point to Netlify:

   **Option 1: Using Netlify nameservers (recommended)**
   - In GoDaddy, set the nameservers to Netlify's nameservers:
     - ns1.netlify.com
     - ns2.netlify.com
     - ns3.netlify.com
     - ns4.netlify.com

   **Option 2: Using GoDaddy DNS**
   - Add an A record:
     - Type: A
     - Host: @ (or leave blank)
     - Value: 75.2.60.5 (Netlify's load balancer IP)
     - TTL: 1 hour (or default)
   
   - Add CNAME records for www:
     - Type: CNAME
     - Host: www
     - Value: [your-netlify-site-name].netlify.app
     - TTL: 1 hour (or default)

3. **Wait for DNS propagation**
   - DNS changes can take anywhere from a few minutes to 48 hours to propagate
   - You can check propagation status using [whatsmydns.net](https://www.whatsmydns.net/)

4. **Set up HTTPS in Netlify**
   - Once your domain is connected, Netlify will automatically provision an SSL certificate
   - This process is automatic but might take a few minutes

## I want to use a custom domain - is that possible?

Yes! Follow the instructions above in the "Connecting GoDaddy domain to Netlify" section to set up your custom domain.
