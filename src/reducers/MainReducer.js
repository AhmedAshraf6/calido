import {
  ADD_USER,
  DETECT_FILTER,
  DETECT_NAVBAR,
  REMOVE_USER,
} from '@/actions/actions';

export default function MainReducer(state, action) {
  if (action.type === DETECT_NAVBAR) {
    return { ...state, navbar: action.payload };
  }
  if (action.type === DETECT_FILTER) {
    return { ...state, filter: action.payload };
  }
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload };
  }
  if (action.type === REMOVE_USER) {
    return { ...state, user: {} };
  }

  return state;
}
