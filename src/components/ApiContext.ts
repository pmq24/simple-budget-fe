import React, { useContext } from 'react';
import Api from '../api/api';

const ApiContext = React.createContext<Api>(new Api());

export default function useApi() {
  return useContext(ApiContext);
}
