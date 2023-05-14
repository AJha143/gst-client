module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    "plugins": [
        "react", "import", "jsx-a11y"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }},
    "rules": {
        "react/prop-types": 0,
        "indent": ["error", 2],
        "linebreak-style": 1,
        "quotes": ["error", "double"]
    }
}
