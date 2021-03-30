/**
 * babel 配置
 */
 module.exports = (api) => {
    api.cache(false);
    // preset 和 plugin 同时开启 corejs 的情况下，@babel/plugin-transform-runtime 局部 polyfill 的优先级更高
    return {
        presets: [
            // 只能做语法转换，不会处理如 Set, Map, Object.asign 等 api 的转换
            ['@babel/preset-env', {
                // 转换提案中的语法(如classProperty)，babel默认只转换稳定的es特性
                shippedProposals: true,
                // 支持的目标环境
                targets: { ie: 9 },
                 // 避免转换生成器, 否则需要 polyfill"regenerator-runtime/runtime" 支持 regeneratorRuntime 对象
                // exclude: ['@babel/plugin-transform-regenerator'],
                // polyfill 都是直接修改当前环境，数据全局影响，适合业务框架使用，不适合公共包使用
                // entry: 会把当前环境需要的polyfill从入口都引入，适合单个polyfill文件，但体积比较大
                // usage: 只引入使用到的polyfill，每个文件都会引入，存在重复
                // useBuiltIns: 'usage',
                // corejs: "3.9",
            }],
        ],
        plugins: [
            // 用于抽离公共 helper，局部 polyfill，不污染全局环境，默认会转换 regeneratorRuntime
            ['@babel/plugin-transform-runtime', {
                corejs: 3, // 开启 corejs 会使用 corejs 生成局部 polyfill
            }],
        ],
    }
 }
