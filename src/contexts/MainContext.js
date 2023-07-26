'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import MainReducer from '@/reducers/MainReducer';
import { ADD_USER, DETECT_NAVBAR } from '@/actions/actions';
const MainContext = createContext();
const intialState = {
  navbar: false,
  calidoUser: {},
};
export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(MainReducer, intialState);
  const detectNavbar = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  const AddUser = (calidoUser) => {
    dispatch({ type: ADD_USER, payload: calidoUser });
  };
  return (
    <MainContext.Provider value={{ ...state, detectNavbar, AddUser }}>
      {children}
    </MainContext.Provider>
  );
}
export const useMainContext = () => {
  return useContext(MainContext);
};
