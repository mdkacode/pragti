import React from 'react';
import Provider from '../Modules/context';
import AppLayout from './AppLayout/AppLayout';
const EntryComponent = () => {
  console.disableYellowBox = true; // for disabling the Yello box warning
  const initialValue = { rating: 2 };
  return (
    <Provider value={initialValue}>
      <AppLayout mode="dark" title="People" key="title-of-App" />
    </Provider>
  );
};

export default EntryComponent;
