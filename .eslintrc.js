module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'rules': {
        'max-len': [1, 120, 2, {ignoreComments: true}]
    },
    "env": {
        "jest": true
    },
    "globals": {
        "module": false,
        "process": false,
        "__dirname": false,
    }
};
