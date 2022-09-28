// const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')
const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},

            javascriptEnabled: true,
          },
        },
      },
    },

    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: path.join(__dirname, 'public/styles/common.less'),
        styleType: 'less',
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
}
