import { configureStore } from '@reduxjs/toolkit';

const cache: { [index: string]: any } = {};
const fileList = require.context('./modules/', false, /\.ts/);
fileList.keys().forEach(key => {
    const reducers = fileList(key);
    key = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.ts'));
    Object.keys(reducers).forEach(() => {
        cache[key] = reducers.default;
    });
});

const store = configureStore({
    reducer: cache as any
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
