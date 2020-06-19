import React, { Fragment } from 'react';
import spinner from './481.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '80px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
