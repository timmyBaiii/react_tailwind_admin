import { configureStore } from '@reduxjs/toolkit';

// import logger from 'redux-logger';

const modulesFiles = require.context('./modules', true, /\.js/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');

    const value = modulesFiles(modulePath);

    modules[moduleName] = value.default[moduleName];

    return modules;
}, {});

const store = configureStore({
    reducer: {
        app: modules.app,
        modelLoader: modules.modelLoader
    }
});

export default store;
