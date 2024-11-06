import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      {/* your components */}
    </Provider>
  );
};
