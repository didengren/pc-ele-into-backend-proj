let plugins = [];
plugins.push([
  "component",
  {
    libraryName: "element-ui",
    styleLibraryName: "theme-chalk"
  }
]);
if (process.env.NODE_ENV !== "local")
  plugins.push(["transform-remove-console", { exclude: [] }]); // exclude: ["error", "warn"]

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: plugins
};
