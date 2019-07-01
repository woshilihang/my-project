# Project

> about this prooject,  TS + React + Redux + PWA

## 技术栈

    React + React-Router + Redux + Redux-Thunk + Typescript + PWA + Jest

### 注意点

* 使用接口继承

* 页面级别的reducers    同步action和异步action

### CZ工具集集成

> git commit GIT提交代码的时候需要规范的提交说明，阐述当前代码，Angular规范，借助工具（Commitizen）实现

* 修复Bug
* 代码性能优化
* 新增功能
* 发布版本

#### 规范的GIT提交说明
* 提供更多的历史信息，方便快速浏览
* 可以过滤某些commit，便于筛选代码review
* 可以追踪commit生成更新日志
* 可以关联issues

##### type
feat
fix
docs
style 代码格式，不影响功能，例如空格，分号格式的修正
refactor 重构
perf    性能优化
test    测试
build 变更项目构建或外部依赖，例如scopes：webpack,gulp,npm,grunt
ci 更改持续集成软件的配置文件和package的script命令，例如scripts，Travis，circle
chore 更改构建流程或辅助工具
revert 代码回退

##### scope(可选)
> 说明commit影响的范围，依据项目而定，例如在业务代码项目中可以根据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分

##### subject
> subject是commit的简短描述

##### Body 
> 是commit的详细描述，说明代码提交的详细说明

##### Footer
> 如果代码提交的是不兼容变更或关闭缺陷，则Footer必需，否则可以省略

##### BRACKING CHANGE
> 当前代码与上一个版本不兼容，则Footer以BREAKING CHANGE开头，后面是对变动的描述、以及变动的理由和迁移方法。

##### issue（关闭缺陷）
> 如果当前提交有针对特定的issue，那么在Footer部分填写需要关闭的的单个issue或者一系列issues

##### 参考

[介绍提交说明工具集cz适配器、校验以及日志）的使用方法](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fcommitizen%2Fcz-cli)

[Cz工具集使用介绍 - 规范Git提交说明](https://juejin.im/post/5cc4694a6fb9a03238106eb9#heading-0)

[Angular规范](https://link.juejin.im/?target=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y%2Fedit%23heading%3Dh.greljkmo14y0)

[cz-cli - cz工具](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fcommitizen%2Fcz-cli)

[cz-customizable - cz适配器](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fleonardoanalista%2Fcz-customizable)

[@commitlint/config-conventional  - cz适配器](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fmarionebl%2Fcommitlint%2Ftree%2Fmaster%2F%40commitlint%2Fconfig-conventional)

[commitlint - cz校验工具](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fmarionebl%2Fcommitlint)

[commitlint-config-cz - cz校验工具的校验规则](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fwhizark%2Fcommitlint-config-cz)

[validate-commit-msg - cz校验工具](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FFrikki%2Fvalidate-commit-message)

[conventional-changelog - cz日志生成器](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%2Ftree%2Fmaster%2Fpackages%2Fconventional-changelog)

[commit_msg - git钩子文档](https://link.juejin.im/?target=https%3A%2F%2Fgit-scm.com%2Fdocs%2Fgithooks%23_commit_msg)
