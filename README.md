# Koa Ts Webpack 集成模板

![[object Object]](https://cdn.jsdelivr.net/gh/Lmmmmmm-bb/Image-Hosting@master/koa-ts-webpack-image.png)
<p align="center">
    <a href="https://github.com/Lmmmmmm-bb/Koa-Ts-Webpack"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/Koa-Ts-Webpack"></a>
    <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" /></a>
    <a href="https://github.com/Lmmmmmm-bb/Koa-Ts-Webpack/issues"><img alt="GitHub license" src="https://img.shields.io/github/issues/Lmmmmmm-bb/Koa-Ts-Webpack" /></a>
    <a href="javascript:;"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF" /></a>
</p>

## 主要模块

- Koa
- Koa-Router
- Koa2-Cors
- Webpack 5
- Typescript

提供了基础的 Webpack 配置，可以对 Koa + TS 进行打包。

## 代码风格检查和格式化

- prettier
- lint-staged

配置 `.prettierrc` 来格式化你的代码。

使用 `Prettier` 进行代码风格检查，使用 `husky` 和 `lint-staged` 配置 Git hooks 实现提交前代码格式化工作。

## Commit 信息的规范和检查

- husky
- commitlint
- cz-customizable

通过 `.cz-config.js` 文件来配置 `git commit` 信息提交。

`.cz-config.js` 的实例文件可查看 [官方示例](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)。

使用 `npm run commit` 代替 `git commit` 进行提交。
