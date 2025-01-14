/* eslint-disable @typescript-eslint/no-var-requires */
const plugins = require('next-compose-plugins');
const antdLess = require('next-plugin-antd-less');
const transpileModules = require('next-transpile-modules');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = function (phase, ...args) {
    return plugins(
        [
            [transpileModules, ['@blocto/sdk', '@project-serum/sol-wallet-adapter']],
            [
                antdLess,
                {
                    modifyVars: {
                        '@background': '#303030',
                        '@primary-color': '#512da8',
                    },
                },
            ],
        ],
        {
            reactStrictMode: true,
            basePath: phase === PHASE_PRODUCTION_BUILD ? '/wallet-adapter/example' : '',
        }
    )(phase, ...args);
};
