<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="public/logo.png" alt="Logo - Strapi Formula field" />
</div>
<div align="center">
  <h1>Strapi v4 - Formula field</h1>
  <p>Powerful math operations just inside your Headless CMS!</p>
  <a href="https://github.com/BorysShulyak/strapi-plugin-field-formula/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/BorysShulyak/strapi-plugin-field-formula">
  </a>
  <a href="https://github.com/BorysShulyak/strapi-plugin-field-formula/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/BorysShulyak/strapi-plugin-field-formula?color=5d2de0">
  </a>
  <a href="https://www.npmjs.com/package/strapi-plugin-field-formula">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/strapi-plugin-field-formula">
  </a>
</div>

<div style="margin: 20px 0" align="center">
  <img style="width: 100%; height: auto;" src="public/preview.png" alt="UI preview" />
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
- [🗺️ Roadmap](#-roadmap)
- [❤️Support or Donate](#-support-or-donate)
- [💕Special Thanks](#-special-thanks)

## ✨ Features
- [Strapi Custom Field](https://docs.strapi.io/dev-docs/custom-fields) for calculating the provided formula.
- [mathjs](https://mathjs.org/) integration.
  - Supports numbers, big numbers, complex numbers, fractions, units, strings, arrays, and matrices. 
  - Is compatible with JavaScript’s built-in Math library. 
  - Contains a flexible expression parser. 
  - Does symbolic computation. 
  - Comes with a large set of built-in functions and constants.
- Calculating the `formula` with the provided `scope` using the powerful `mathjs.evaluate` method. [Read More.](https://mathjs.org/docs/expressions/parsing.html#evaluate)

## 🧰 Requirements

- `strapi@4.X.X`

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
yarn add strapi-plugin-field-formula@latest
```
**OR**
```shell
npm install strapi-plugin-field-formula@latest
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
> Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support 
for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated 
solution to work with different data types like numbers, big numbers, complex numbers, fractions, units, and matrices. 
Powerful and easy to use.

Here is some examples, but to use this plugin on the full 100%, you have to read the official [Mathjs](https://mathjs.org/examples/index.html) 
documentation, and especially the [expressions](https://mathjs.org/examples/expressions.js.html) part as `formula` is 
the same thing as `mathjs.evaluate` method 🤫

> Function `evaluate` accepts a single **(in our case)** `expression` or an array with expressions as the first argument
and has an optional second argument containing a `scope` with variables and functions. The scope can be a regular
JavaScript Object, or Map **(JSON in our case)**. The scope will be used to resolve symbols, and to write assigned
variables or function.

### Example 1
```
formula: sqrt(x^y + r^k)
scope: {
  "x": 2,
  "y": 3,
  "r": 4,
  "k": 5
}
result: 32.12475680841802
```

### Example 2
```
formula: cos(x deg)
scope: { "x": 45 }
result: 0.7071067811865476
```

## 🛠️ Contributing
See the [CONTRIBUTING.md](https://github.com/BorysShulyak/strapi-plugin-field-formula/blob/main/CONTRIBUTING.md) 
document.

## 🗺️ Roadmap
- Object response to unleash more difficult expressions.

## ❤️ Support or Donate
If you are enjoying this plugin and feel extra appreciative, you could [buy me a book](https://bmc.link/borisshulyak) 
📖 or 3 📖📖📖.

## 💕 Special Thanks
- I want to say thank you to **my wife Diana** for her love, daily support, motivation and inspiration.




