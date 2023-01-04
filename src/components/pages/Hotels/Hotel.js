import React from 'react';
import { connect } from 'react-redux';
import RoomCards from './RoomCards';

const Hotel = ({ cart }) => {
  console.log('cart -->> in hotels', cart);
  const rooms = [
    {
      roomId: '333333',
      roomTypeId: '1',
      roomNumber: '3020',
      roomCost: 1300,
      price: 1300
    },
    {
      roomId: '44444',
      roomTypeId: '2',
      roomNumber: '4020',
      roomCost: 1400,
      price: 1400
    },
    {
      roomId: '55555',
      roomTypeId: '3',
      roomNumber: '5020',
      roomCost: 1500,
      price: 1500
    }
  ];
  function roomFunction(room) {
    const sumArr = [];
    console.log('room', room);
    sumArr.push(room);
  }
  return (
    <>
      <div>Hotel Page</div>
      <div>
        {rooms.map((room, i) => (
          <div key={room.roomId}>
            {/* <button onClick={() => roomFunction(room)}>
              select room {room.roomNumber}
            </button> */}
            <RoomCards roomData={room} />
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(Hotel);
