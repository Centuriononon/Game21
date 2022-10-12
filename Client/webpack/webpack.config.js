const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({env}) => {
    const modeConfig = require(`./webpack.${env}.js`);
    return merge(commonConfig, modeConfig)
}