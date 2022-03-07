import axios from "axios";
import { apiUrl } from "../utils";
export const LoginAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_FETCHING_ATTEMPT" });

    const { data } = await axios.post(`${apiUrl}/api/auth`, payload);

    dispatch({ type: "LOGIN_FETCHING_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOGIN_FETCHING_ERROR", payload: error });
  }
};
