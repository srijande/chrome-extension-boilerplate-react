import React from 'react';
import CreateEvent from '../../components/CreateEvent';
import Header from '../../components/Header';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <Header></Header>
      <CreateEvent ></CreateEvent>
    </div>
  );
};

export default Popup;
