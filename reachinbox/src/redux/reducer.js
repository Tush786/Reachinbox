import { TOGGLE_THEAM } from "./actiontype";

const initialState = {
  theam: "dark", 
};

export const theamreducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case TOGGLE_THEAM:
      return {
        ...state,
        theam: payload,
      };
    default:
      return state;
  }
};


