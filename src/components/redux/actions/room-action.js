import {
  ADD_TO_CART,
  ADJUST_QTY,
  CLEAR_ROOM_CART,
  REMOVE_FROM_CART,
  SET_QTY_ZERO
} from '../types/room-types';
import { useSelector } from 'react-redux';

export const handleAddToCart = (item) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const handleAdjustQty = (itemId, value) => async (dispatch) => {
  dispatch({
    type: ADJUST_QTY,
    payload: {
      roomTypeId: itemId,
      qty: +value
    }
  });
};

export const handleRemoveFromCart = (itemId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      roomTypeId: itemId
    }
  });
};

// function get cart from store
export const GetCartData = () => {
  const cart = useSelector((state) => state.rootReducer.cart);
  return cart;
};
