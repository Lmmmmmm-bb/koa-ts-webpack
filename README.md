# Koa Ts Webpack 集成模板

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
