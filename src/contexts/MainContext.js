'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import MainReducer from '@/reducers/MainReducer';
import { ADD_USER, DETECT_NAVBAR, REMOVE_USER } from '@/actions/actions';
const MainContext = createContext();
const intialState = {
  navbar: false,
  user: {},
};
export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(MainReducer, intialState);
  const detectNavbar = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  const AddUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };
  const removeUser = () => {
    dispatch({ type: REMOVE_USER });
  };
  return (
    <MainContext.Provider
      value={{ ...state, detectNavbar, AddUser, removeUser }}
    >
      {children}
    </MainContext.Provider>
  );
}
export const useMainContext = () => {
  return useContext(MainContext);
};
