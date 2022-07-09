module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-modules-typescript-loader" }, 
        { loader: "css-loader", options: { modules: true } }, 
        { loader: "sass-loader" }, 
      ],
    });
    return config;
  },

  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
