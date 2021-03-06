## Shurado Amaze

方便建立 redux application。

- eslint 搭配 airbnb config
- stylelint 搭配 standard config

### Webpack setting

#### 如何開啟 devServer

- run `npm run webpack-dev-server`
詳細設定可以到 `webpack.config.js` 查看
- 到 `localhost:8080` 進行開發，publicPath 為 `/bundle`

#### Webpack build

- 到 `webpack.parts.js` 查看相關設定

#### 使用的 module

- babel
  - es2015
  - react
  - react-hmr
  - 相關設定在 babelrc
- postcss
  - autoprefixer
  - cssnano
  - 相關設定在 postcssrc
- eslint
- stylelint
- react
  - react-dom
  - react-redux
  - redux
  - redux-logger
- ramda

## TODOs

- [] 因為後端串接的關係，暫時還是用 REST API 來實作，之後逐漸改成 graphql, apollo 的形式
  - sequlize-graphql
  - postgraphql

- [] 實作使用者動態分頁處理
- [] 實作當使用者追蹤其他人時，動態發佈會傳送通知的功能
- 使用 apollo 取代部分 redux 邏輯

## CHANGELOG

### 2017-8-2

- 更新至 React16-beta
- 部分 Component 套用 react-apollo 以及 graphql


## License

MIT
