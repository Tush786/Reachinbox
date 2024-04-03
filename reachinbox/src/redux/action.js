import { TOGGLE_THEAM } from "./actiontype";



export const toggleTheme = (theam) => async (dispatch) => {
 
 return {
    type: TOGGLE_THEAM,
    payload: theam,
  }
}