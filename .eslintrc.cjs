module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    // eslint 的配置
    'no-console': ['error', { allow: ['log'] }], // 允许使用 console.log()
    'no-debugger': 1,
    'no-confusing-arrow': 0, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    '@typescript-eslint/no-explicit-any': ['off'], // ts 定义数据类型为any不报错
    '@typescript-eslint/no-unused-vars': 1, //没有使用的参数
    '@typescript-eslint/no-empty-function': 1, // 方法内部没有逻辑书写
    'no-unreachable': 1, //不能有无法执行的代码
  },
};
