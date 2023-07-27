'use client';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import FilterReducer from '@/reducers/FilterReducer';
import {
  CHANGE_PAGE,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_FILTERED_ERROR,
  HANDLE_CHANGE_FILTER,
  SHOW_LOADING_FILTER,
} from '@/actions/actions';
import customFetch from '@/util/axios';
const FilterContext = createContext();
const initialFiltersState = {
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};
const initialState = {
  isLoading: false,
  products: [],
  totalProducts: 0,
  numOfPages: 1,
  page: 1,
  isError: false,
  ...initialFiltersState,
};
export default function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const GetProducts = async () => {
    dispatch({ type: SHOW_LOADING_FILTER });
    try {
      // let url = `/products?sort=${state.sort}&page=${state.page}`;
      const res = await customFetch.get('/products');
      console.log(res.data);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res?.data?.results?.rows,
        payload2: res?.data?.numberOfPages,
        payload3: res?.data?.results?.count,
      });
    } catch (error) {
      dispatch({
        type: GET_FILTERED_ERROR,
      });
    }
  };
  const handleChangeFunc = (data) => {
    dispatch({
      type: HANDLE_CHANGE_FILTER,
      payload: data,
    });
  };
  const ClearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
  const changePage = (page) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleChangeFunc,
        ClearFilter,
        changePage,
        GetProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export const useFilterContext = () => {
  return useContext(FilterContext);
};
