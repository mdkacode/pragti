import React from 'react';
import Provider from '../Modules/context';
import AppLayout from './AppLayout/AppLayout';
const EntryComponent = () => {
  const initialValue = {rating: 2};
  return (
    <Provider value={initialValue}>
      <AppLayout mode="light" title="People" key="title-of-App" />
    </Provider>
  );
};

export default EntryComponent;
