# Bingo
![logo]

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#starting-the-application">Starting the application</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

The Bingo Checker application is a tool designed to determine whether a set of bingo cards achieves bingo based on a given set of numbers. This lightweight and versatile solution is perfect for bingo enthusiasts, event organizers, or anyone managing bingo games.

### Built With

[![Node][Node.js]][Node-url]
<br>
[![TypeScript][TypeScript.js]][TypeScript-url]


### Usage
This bingo checker takes two inputs:
```sh
bingo(calledNumbers, bingoCard)
```
* `calledNumbers` - this should be an array of numbers
* `bingoCard` - this should also be an array of numbers. As bingo is played on a square grid, you must have a square number of entries in the array so that the rows and columns can be calculated correctly.
<p align="right">(<a href="#bingo">back to top</a>)</p>

## Getting Started

### Prerequisites

* yarn
  ```sh
  yarn global add yarn@latest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:lilyboughton/bingo.git
   ```
2. Install dependencies using [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
   ```sh
   yarn install
   ```

<p align="right">(<a href="#bingo">back to top</a>)</p>


### Starting the application:

* To start the application in development using `nodemon` and `ts-node` to do cold reloading, run:
```
yarn run start:dev
```
* To build the app at `build`, cleaning the folder first, run:

```
yarn run build
```
* To start the app in production by first building the project with `yarn run build`, and then executing the compiled JavaScript at `build/index.js`, run:

```
yarn run start
```



[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=green
[Node-url]: https://nodejs.org/
[TypeScript.js]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=blue
[TypeScript-url]: https://www.typescriptlang.org/
[Logo]: https://img.shields.io/badge/bingo-lily_boughton-0aa39c?style=for-the-badge&labelColor=000000