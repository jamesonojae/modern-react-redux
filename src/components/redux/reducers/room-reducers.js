import { ADD_TO_CART, ADJUST_QTY } from '../types/room-types';

const INITIAL_STATE = [];

const roomReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  let quantity;
  let amount;
  switch (type) {
    case ADD_TO_CART:
      const item = state.find((prod) => prod.roomTypeId === payload.roomTypeId);
      amount = payload.discountRate ? payload.discountPrice : payload.price;
      if (!item) {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
            totalCost: 1 * amount,
            hasError: false
          }
        ];
      }
      return [...state];
    case ADJUST_QTY:
      quantity = state.find(
        (itemQty) => itemQty.roomTypeId === payload.roomTypeId
      );

      if (quantity) {
        const hasError = payload.qty > quantity.availableRooms;
        const totalCost =
          payload.qty *
          (quantity.discountRate ? quantity.discountPrice : quantity.price);
        // prettier-ignore
        return state.map((value) =>
          value.roomTypeId === payload.roomTypeId
            ? { ...value, qty: payload.qty, totalCost, hasError }
            : value);
      }
      return state;

    default:
      return state;
  }
};

export default roomReducer;
