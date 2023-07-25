import { ADD_USER, DETECT_NAVBAR } from '@/actions/actions';

export default function MainReducer(state, action) {
  if (action.type === DETECT_NAVBAR) {
    return { ...state, navbar: action.payload };
  }
  if (action.type === ADD_USER) {
    return { ...state, calidoUser: action.payload };
  }

  return state;
}
