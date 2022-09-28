import axios from "axios";
import { AppDispatch } from "..";
import backendEndpoints from "../../data/classes/backendEndpoints";
import { IAccessResponse } from "../../models/accessResponse";
import { accessSlice } from "../slices/access.slice";

export const changeAccess = (condition: boolean) => (dispatch: AppDispatch) => {
  dispatch(accessSlice.actions.changeAccess(condition));
};

export const checkAccess = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post<IAccessResponse>(
      backendEndpoints.baseUrl + backendEndpoints.access,
      {
        key: localStorage.getItem("key"),
      }
    );

    if (response.data.valid) {
      dispatch(changeAccess(response.data.valid));
    } else {
      dispatch(changeAccess(response.data.valid));
    }
  } catch (error) {
    console.error(error);
  }
};
