# Docusaurus Site

# 📁 Introduction
⚡️ Docusaurus will help you ship a beautiful documentation site in no time.
💸 Building a custom tech stack is expensive. Instead, focus on your content and just write Markdown files.
💥 Ready for more? Use advanced features like versioning, i18n, search and theme customizations.
💅 Check the best Docusaurus sites for inspiration.
🧐 Docusaurus is a static-site generator. It builds a single-page application with fast client-side navigation, leveraging the full power of React to make your site interactive. It provides out-of-the-box documentation features but can be used to create any kind of site (personal website, product, blog, marketing landing pages, etc).

Link: https://docusaurus.io/docs

# 📁 Main Folders and Files in a Docusaurus Project

This section explains the main folders and files you will find in a Docusaurus project.

---

## 📁 Main Folders in Docusaurus

| Folder Name     | Description |
|-----------------|-------------|
| `docs/`         | Contains all Markdown (`.md`, `.mdx`) files for documentation content. |
| `src/`          | Contains React components and custom web pages (e.g., About, Contact). |
| `static/`       | Stores static files like images, PDFs, or favicon. These can be accessed directly in the browser. |
| `node_modules/` | Auto-generated folder that contains installed npm dependencies. You don’t need to edit this manually. |
| `build/`        | The output folder generated after running `npm run build`. It contains the production-ready static website. |

---

## 📄 Main Files in Docusaurus

| File Name              | Description |
|------------------------|-------------|
| `docusaurus.config.ts` | Main configuration file. Sets the site title, logo, navbar items, themes, plugins, and more. |
| `sidebars.ts`          | Defines the structure and order of sidebar items in the documentation section. |
| `package.json`         | Lists project metadata and scripts like `start`, `build`, `deploy`, and the required dependencies. |
| `tsconfig.json`        | Configuration file for TypeScript support. |
| `README.md`            | Introduction and basic usage instructions for the project. |
| `package-lock.json`    | Automatically generated to lock exact versions of installed npm packages. |

---

These folders and files form the foundation of your Docusaurus project. You'll mainly work with:

- `docs/` to write your documentation content.
- `sidebars.ts` to manage the sidebar menu.
- `docusaurus.config.ts` to customize the site layout and behavior.


## 🧪 Do I Need to Run `npm run build` When Testing Locally?

If you are **only testing the site on your local machine** and **not sharing it with others yet**,  
➡️ **You do NOT need to run `npm run build`**.

---
### ✅ Use This Instead
Run the following command to start a local development server:


## 🚀 Run a local development server

```bash
cd my-website
npm run start
```
- Opens the site at: http://localhost:3000
- Automatically refreshes when you edit files (live reload)
- Fast and convenient for testing changes

❌ When is npm run build NOT necessary?
You don't need npm run build if:
- You are writing or editing documentation content
- You are testing the layout or links locally
- You are not ready to publish or deploy the site yet

✅ When SHOULD You Run npm run build?
You should run npm run build when:
- You're ready to publish your site
- You plan to deploy it to GitHub Pages or another hosting platform
- You want to test how the final production site looks

## 🚀 Summary
Here’s a quick summary of when to use each command:

| **Situation**                    | **Command to Use**                                      |
|----------------------------------|---------------------------------------------------------|
| Local testing only               | `npm run start` ✅                                      |
| Ready to build the static site   | `npm run build` ✅                                      |
| Deploying to GitHub Pages        | `npm run build` ➕ `USE_SSH=true npm run deploy` ✅    |