import store from './index.js';

const getters = {
    isLoading: store.getState().app.isLoading,
    modelProcess: store.getState().modelLoader.modelProcess,
    urbanBikeProccess: store.getState().modelLoader.urbanBikeProccess,
    metroBikeProccess: store.getState().modelLoader.metroBikeProccess,
    cityBikeProccess: store.getState().modelLoader.cityBikeProccess,
    trekkingBikeProccess: store.getState().modelLoader.trekkingBikeProccess,
    trekkingClassicBikeProccess: store.getState().modelLoader.trekkingClassicBikeProccess,
    roadBikeProccess: store.getState().modelLoader.roadBikeProccess
};

store.subscribe(() => {
    getters.isLoading = store.getState().app.isLoading;
    getters.modelProcess = store.getState().modelLoader.modelProcess;
    getters.urbanBikeProccess = store.getState().modelLoader.urbanBikeProccess;
    getters.metroBikeProccess = store.getState().modelLoader.metroBikeProccess;
    getters.cityBikeProccess = store.getState().modelLoader.cityBikeProccess;
    getters.trekkingBikeProccess = store.getState().modelLoader.trekkingBikeProccess;
    getters.trekkingClassicBikeProccess = store.getState().modelLoader.trekkingClassicBikeProccess;
    getters.roadBikeProccess = store.getState().modelLoader.roadBikeProccess;
});

// unsubscribe();

export default getters;
