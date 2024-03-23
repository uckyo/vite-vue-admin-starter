module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // .vue文件的ESLint自定义解析器。
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended", // eslint默认推荐的规范
    "plugin:vue/vue3-recommended", // vue3默认的推荐规范
    "plugin:@typescript-eslint/recommended", // eslint/typescript 默认的推荐规范
    "plugin:prettier/recommended" // 插件约束规范 解决eslint和prettier的冲突问题
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser"
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off"
  }
};
