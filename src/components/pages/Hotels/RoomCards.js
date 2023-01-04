import React, { useState } from 'react';
import {
  handleAddToCart,
  handleAdjustQty,
  GetCartData
} from '../../redux/actions/room-action';
import { connect } from 'react-redux';
import { PaystackButton } from 'react-paystack';

const config = {
  reference: new Date().getTime().toString(),
  email: 'user@example.com',
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_573cca83eaa8a37b2ac10bd98015fde5b4fe4df3'
};

const RoomCards = ({
  roomData,
  cart,
  totalBills,
  handleAddToCart,
  handleAdjustQty
}) => {
  console.log('cart -->> in room card', roomData);
  const { roomNumber, roomCost } = roomData;
  const [quantity, setQuantity] = useState(roomData.qty);

  const onChangeHandler = (e) => {
    // eslint-disable-next-line no-param-reassign
    setQuantity(e.target.value);
    handleAdjustQty(roomData.roomTypeId, e.target.value);
    // handleHasError(true);
    // console.log('inside summary item', cartData.hasError);
  };

  // paystack
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction
  };
  // store dtata
  const myData = GetCartData();
  console.log('myData', myData);

  let totalAmount;
  let numOfDays = 1;

  totalAmount = totalBills * numOfDays;
  console.log('cart.totalBills', totalBills);

  return (
    <>
      {/* <div>Room Cards Page</div> */}
      <div>
        <div>
          <button
            onClick={() =>
              handleAddToCart({
                ...roomData,
                type: 'room',
                price: roomCost
                // itemName: roomTypeName,
              })
            }
          >
            select room {roomNumber}
          </button>
          <div>
            <input type="number" value={quantity} onChange={onChangeHandler} />
            {/* <button id="minus">−</button>
            <input type="number" value="0" id="input" />
            <button id="plus">+</button> */}
          </div>
        </div>
        <span>Total Payment: {totalAmount}</span>
        <div>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </>
  );
};

const calcQuickTotal = (items) => {
  if (items) {
    return items.reduce((a, b) => {
      if (b.discountRate) {
        return a + b.qty * b.discountPrice;
      } else {
        return a + b.qty * b.price;
      }
    }, 0);
  }
  return 0;
};

const mapStateToProps = (state) => {
  const cart = state.rootReducer.cart;
  return {
    totalBills: calcQuickTotal(state.rootReducer.cart),
    cart
  };
};

export default connect(mapStateToProps, { handleAddToCart, handleAdjustQty })(
  RoomCards
);
