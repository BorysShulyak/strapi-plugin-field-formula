<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="public/assets/logo.png" alt="Logo - Strapi Formula field" />
</div>
<div align="center">
  <h1>Strapi v4 - Formula field</h1>
  <p>Powerful math operations just inside your Headless CMS!</p>
  <a href="https://www.npmjs.org/package/strapi-plugin-comments">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/VirtusLab-Open-Source/strapi-plugin-comments?label=npm&logo=npm">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-comments">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-comments.svg" alt="Monthly download on NPM" />
  </a>
  <a href="https://circleci.com/gh/VirtusLab-Open-Source/strapi-plugin-comments">
    <img src="https://circleci.com/gh/VirtusLab-Open-Source/strapi-plugin-comments.svg?style=shield" alt="CircleCI" />
  </a>
  <a href="https://codecov.io/gh/VirtusLab-Open-Source/strapi-plugin-comments">
    <img src="https://codecov.io/gh/VirtusLab-Open-Source/strapi-plugin-comments/coverage.svg?branch=master" alt="codecov.io" />
  </a>
  <a href="https://sharing.clickup.com/tl/xhcmx-83/strapiv-4-comments-roadmap">
    <img src="https://img.shields.io/website?down_message=roadmap&label=product&up_message=roadmap&url=https%3A%2F%2Fsharing.clickup.com%2Ftl%2Fxhcmx-83%2Fstrapiv-4-comments-roadmap" />
  </a>
  <a href="https://sharing.clickup.com/b/xhcmx-63/strapiv-4-comments-board">
    <img src="https://img.shields.io/website?down_message=board&label=product&up_color=blue&up_message=board&url=https%3A%2F%2Fsharing.clickup.com%2Fb%2Fxhcmx-63%2Fstrapiv-4-comments-board" />
  </a>
</div>

---
<div style="margin: 20px 0" align="center">
  <img style="width: 100%; height: auto;" src="public/assets/preview.png" alt="UI preview" />
</div>

A plugin for [Strapi Headless CMS](https://github.com/strapi/strapi) that provides an integration with powerful 
[mathjs](https://mathjs.org/) library. 

## Table of Contents

- [✨ Features](#-features)
- [🧰 Requirements](#-requirements)
- [🦾 Installation](#-installation)
- [⚙️ Configuration](#-configuration)
- [♾️Usage](#-usage)
- [🛠️ Contributing](#-contributing)
- [❤️Support or Donate](#-support-or-donate)

## ✨ Features

## 🧰 Requirements

- `strapi@4.X.X`
- `mathjs@11.9.1`

Complete installation requirements are exact the same as for Strapi itself and could be found in the [official Strapi
documentation](https://docs.strapi.io/dev-docs/quick-start).

> Before installing Strapi, the following requirements must be installed on your computer:
> - Node.js: Only Maintenance and LTS versions are supported (v16, v18, and v20).
>   - Node v18.x is recommended for Strapi v4.3.9 and above
>   - Node v16.x is recommended for Strapi v4.0.x to v4.3.8.
> - Your preferred Node.js package manager:
>   - npm (v6 and above)
>   - yarn

## 🦾 Installation
```shell
yarn add mathjs@11.9.1 strapi-plugin-field-formula@latest
```
**OR**
```shell
npm install mathjs@11.9.1 strapi-plugin-field-formula@latest
```
After successful installation you could re-build the Strapi instance. You could use the next commands (default) inside
your Strapi project:
```shell
yarn build
yarn develop
```

## ⚙️ Configuration
As a next step you must configure the plugin following the [official Strapi documentation](https://docs.strapi.io/dev-docs/plugins/documentation#configuration).

We need to enable the plugin by adding it to the Strapi plugin config file located in `./config/plugins.js` of your Strapi 
project. If this file does not exist yer, you have to create it manually.

Copy and paste the following config into you `./config/plugins.js` file:
```javascript
// ./config/plugins.js`
module.exports = {
  // ...
  'field-formula': {
    enabled: true
  },
//...
}
```
My congratulation 😄! You have successfully installed and configured the **Strapi Plugin Field Formula**.

## ♾️ Usage

## 🛠️ Contributing
See the [CONTRIBUTING.md](https://github.com/BorysShulyak/strapi-plugin-field-formula/blob/main/documentation/CONTRIBUTING.md) 
document.

## ❤️ Support or Donate
If you are enjoying this plugin and feel extra appreciative, you could [buy me a book](https://bmc.link/borisshulyak) 
📖 or 3 📖📖📖.




