/*
 * Modify the webpack config by exporting an Object or Function.
 *
 * If the value is an Object, it will be merged into the final
 * config using `webpack-merge`.
 *
 * If the value is a function, it will receive the resolved config
 * as the argument. The function can either mutate the config and
 * return nothing, OR return a cloned or merged version of the config.
 *
 * https://cli.vuejs.org/config/#configurewebpack
 */

module.exports = (config) => {
  const resolvePlugin = ["module-resolver", {
    "root": ["./"],
    "alias": {
      "vue": "./libs/vue-mock/index.js",
      "@vue-cdn/vue-cdn-base": "./libs/vue-mock/cdnbase.js"
    }
  }];

  // This is used to convert the generated template Vue code
  config.module.rules.push(
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [
          resolvePlugin
        ]
      }
    }
  )

  let tsRule;

  // This is used to convert the `<script lang="ts"` and TS files
  config.module.rules.forEach(rule => {
    switch (rule.test.toString()) {
      case '/\\.ts$/': {
        tsRule = rule;
        break;
      }
      default:
        break;
    }
  });

  const rule =   {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        resolvePlugin
      ]
    }
  };

  tsRule.use = [rule, ...tsRule.use]
};
