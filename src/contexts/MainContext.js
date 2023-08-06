'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import MainReducer from '@/reducers/MainReducer';
import {
  ADD_USER,
  DETECT_FILTER,
  DETECT_NAVBAR,
  REMOVE_USER,
} from '@/actions/actions';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import customFetch from '@/util/axios';
const MainContext = createContext();
const intialState = {
  navbar: false,
  filter: false,
  user: {},
};
export default function MainProvider({ children }) {
  const [state, dispatch] = useReducer(MainReducer, intialState);
  const token = Cookies.get('calidoUser');

  const detectNavbar = (val) => {
    dispatch({ type: DETECT_NAVBAR, payload: val });
  };
  const detectFilter = (val) => {
    dispatch({ type: DETECT_FILTER, payload: val });
  };
  const AddUser = (user) => {
    dispatch({ type: ADD_USER, payload: user });
  };
  const removeUser = () => {
    dispatch({ type: REMOVE_USER });
  };
  const UpdateUserContext = async () => {
    try {
      const response = await customFetch('/users/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      AddUser(response?.data?.user);
    } catch (error) {
      toast.error('something wrong try again');
      console.log(error);
    }
  };
  useEffect(() => {
    UpdateUserContext();
  }, []);
  return (
    <MainContext.Provider
      value={{ ...state, detectNavbar, AddUser, removeUser, detectFilter }}
    >
      {children}
    </MainContext.Provider>
  );
}
export const useMainContext = () => {
  return useContext(MainContext);
};
