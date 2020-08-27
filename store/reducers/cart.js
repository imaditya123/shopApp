import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};


export default (state = initialState, action) => {


  switch (action.type) {


    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;


      if (state.items[addedProduct.id]) {
        // already item in the cart
        const updatedOrNewCartItem = new CartItem(state.items[addedProduct.id].quantity + 1, prodPrice, prodTitle, state.items[addedProduct.id].sum + prodPrice);
        console.log(state.items)

        return {
          ...state, items: {
            ...state.items, [addedProduct.id]: updatedOrNewCartItem,

          }, totalAmount: state.totalAmount + prodPrice
        };
      }
      else {
        const updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        console.log(state.items)

        return {
          ...state, items: {
            ...state.items, [addedProduct.id]: updatedOrNewCartItem,

          }, totalAmount: state.totalAmount + prodPrice
        };
      }
      break;

    case REMOVE_FROM_CART:
      const currentQty = state.items[action.pid].quantity;
      if (currentQty > 1) {
        console.log("done");
        
        const selectedCartItem = state.items[action.pid];
        const updatedCartItem = new CartItem(selectedCartItem.quantity - 1, selectedCartItem.productPrice, selectedCartItem.productTitle, selectedCartItem.sum - selectedCartItem.productPrice);

        return {
          ...state, items: {
            ...state.items, [action.pid]: updatedCartItem,

          }, totalAmount: state.totalAmount - selectedCartItem.productPrice
        };

      } else {
        console.log("done");

        const selectedCartItem = state.items[action.pid];
        const updatedCartItem = { ...state.items };
        delete updatedCartItem[action.pid];
        return {
          ...state, items: updatedCartItem
          , totalAmount: state.totalAmount - selectedCartItem.productPrice
        };
      }
       break;




    default: return state; break;
  }
}