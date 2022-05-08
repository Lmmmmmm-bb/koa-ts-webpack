# Koa Ts Webpack 集成模板

![Koa-Ts-Webpack](https://socialify.git.ci/Lmmmmmm-bb/Koa-Ts-Webpack/image?description=1&font=Inter&language=1&pattern=Plus&theme=Light)
<p align="center">
    <a href="https://github.com/Lmmmmmm-bb/Koa-Ts-Webpack"><img alt="GitHub license" src="https://img.shields.io/github/license/Lmmmmmm-bb/Koa-Ts-Webpack"></a>
    <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" /></a>
    <a href="https://github.com/Lmmmmmm-bb/Koa-Ts-Webpack/issues"><img alt="GitHub license" src="https://img.shields.io/github/issues/Lmmmmmm-bb/Koa-Ts-Webpack" /></a>
    <a href="javascript:;"><img alt="GitHub PR" src="https://img.shields.io/badge/PR-Welcome-%2345A2FF" /></a>
</p>

## 目录结构

```
├── .cz-config.js           // 配置 commit 信息引导提示
├── .editorconfig
├── .gitignore
├── .husky                  // hooks 相关文件
├── .prettierignore
├── .prettierrc             // 配置代码格式化风格
├── LICENSE
├── README.md
├── commitlint.config.ts    // commit-lint 配置文件
├── pnpm-lock.yaml
├── package.json
├── src
│   ├── index.ts            // koa 入口文件
│   ├── models              // 存放模型的文件夹
│   └── routes              // 存放 koa 路由的文件夹
├── tsconfig.json
└── webpack.config.ts       // webpack 配置文件
```

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
