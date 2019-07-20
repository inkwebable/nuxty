module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        "comma-dangle": 0,
        "indent": ["error",4],
        "semi": [0,"always"],
        "eol-last": "off",
        "space-before-function-paren": "off"
    },
    globals: {}
};