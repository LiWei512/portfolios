module.exports = {
  extends: "react-app",
  settings: {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "semi": 2
  }
}
