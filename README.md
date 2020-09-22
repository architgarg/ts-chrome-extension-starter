<h1 align="center">Typescript Chrome Extension Boilerplate</h1>

<p align="center">
Awesome chrome extension kick starter template <i>which supports <b>Typescript, SCSS, CSS modules</b>  (bundled with <b>webpack</b>)</i>
</p>

# Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage Examples](#usage-examples)
  - [Using aliases](#using-aliases)
  - [Using sass & css modules](#using-sass-and-css-modules)
  - [Integrating React](#integrating-react)

# Features

- In house typescript support, pre configured with webpack.
- React Ready
- Prettier code cleanup before every commit (configured using husky)
- SCSS & css modules support
- Clean and intuitive directory structure
- Wrappers for core chrome services (More will be added in future)
- Auto reloads extension & tab on code changes.
- Typescript Aliases (todo: show example)

# Getting started

- Clone this repository or click on `Use this template` button.
- Change project name in package.json and manifest.json.
- Replace your logo with assets/logo.png
- Update readme.md if you want. (otherwise do it later)
- Start tinkering.

# Usage Examples

### Using aliases

Add new services inside services folder and import them anywhere using @services/name instead of full relative path of the file.

Instead of this

```
import {SomeService} from "../../../../service.ts";
```

Use this

```
import {SomeService} from "@services/service.ts";
```

<b>Note</b> - You can map more folders according to your needs inside tsconfig.json `compilerOptions.path` property.

### Using Sass and css modules

Todo - explain

### Integrating react

Todo - explain
