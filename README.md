# Project

> about this prooject,  TS + React + Redux + PWA

## Next Stage
    1. 抽离公共模块
        * 合理利用浏览器缓存，第三方库以及公共代码和业务代码分开打包
        * 配置optimization,配置splitChunk
        * 打包策略: 第三方库打包为vendor（基本不变），引用两次以上的模块打包出common， 业务代码（常变）
    2. 按需加载
        * 使用webpack遗留功能require.ensure
        * 使用ECMAScript提案的import()语法来实现动态导入, 返回一个promise，浏览器执行到这一行时，就会自动请求这个资源，实现动态加载，
        import()通过注释语法import(/chunkName/'testName').then()来定义异步加载模块的chunkName，，否则默认以ID来定义chunkName
    3. 配置分离
        * 使用webpack-merge合并配置，区分开发环境与生产环境下的webppack配置文件

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


### Webapck配置相关的

> webapck-dev-server输出的文件只存在于内存中，不输出真实的文件，也就是说，你启动它，你的dist目录是没有新文件的

* glob在webpack搭建多页面应用时对打包文件路径的处理

QA:
    hash: 以项目为维度生成的hash值，项目全部文件都共用一个hash值 <br />
    chunkhash: 不同入口生成不同的chunkhash值contenthash <br/>
    contenthash: 根据资源内容生成的hash值

#### 动态publicPath
> PC和H5端，CDN资源路径是不一样的，所以publicPath值应也是不一样的通过设置__webpack_public_path__来动态实现publicPath

#### babel转译注意点

1.   Babel默认只转换新的JS句法，而不转换新的API，如Iterator, Generator, Set, Map,Proxy, Reflect, Symbol, Promise等全局对象，以及定义在全局对象上的方法（比如Object.assign）都不会转码。
    这时需要使用polyfill,但是使用polyfill的方式有很多，锐减babel transformtime + runtime这种方案
    transformtime作用是将遇到的需要转化的语法时引入polyfill，而runtime则中提供polyfill，这样就可以达到按需加引入的效果，而不是把所有的都打包进去，提升打包效率。

#### sass中嵌套sass文件引入

1. 使用resolve-url-loader
2. 将资源路径统一变更为变量来统一管理
3. 通过alias设置路径别名，从而便捷使用绝对路径，但仍需注意在sass文件中引入其他sass文件的时候需要加~

#### 多入口文件配置

```(javascript)
// 多入口文件配置
function getEntry() {
  const entry = {};
  glob.sync('./src/views/*/index.tsx').forEach(filePath => {
    console.log(filePath)
    let name = filePath.match(/\/views\/(.+)\/index.tsx/);
    name = name[1];
    entry[name] = filePath;

    // 实例化HtmlWebpackPlugin插件
    htmlPluginArray.push(new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true, // 折叠空白区域
        removeAttributeQuotes: true, // 移除双引号
      },
      filename: `${name}.html`,
      hash: true, // 消除缓存使用
      template: './src/tpl/'+ name +'.html', // 模板地址
      title: name,
      chunks: [`${name}`], // 生成的HTML页面引入不同的JS文件
    }));
  });
  return entry;
}

// 本项目配置的HtmlWebpackPlugin配置模板统一放在src/tpl下

// 多页面配置就很简单了，不在赘述，注意点就是在webpack配置多页面的时候注意chunks, filename, public等配置项
```

### webpack-merge来合并不同环境下的配置文件

> cross-env NODE_ENV=production用来这是当前node环境， cross-env兼容Windows环境
