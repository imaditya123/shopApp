
import React from 'react';
import {Text,View} from 'react-native';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducers  from './store/reducers/product'
import cartReducers  from './store/reducers/cart'
import ShopNavigator from './navigation/ShopNavigation'

const rootReducer=combineReducers({
  products:productReducers,
  cart:cartReducers,


})

const store=createStore(rootReducer)


const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator/>
      
    </Provider>    
  );
};

  
export default App;
