import RootComponent from './client/components/Todo';
import createStore from './client/store';

if (module.hot) {
    module.hot.accept();
}

export default {
    rootComponent: RootComponent,
    createStore
};
