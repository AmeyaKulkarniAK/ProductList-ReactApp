import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import UpdateProductForm from './components/UpdateProductForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <AddProductForm />
        <UpdateProductForm />
      </div>
    </Provider>
  );
};

export default App;
