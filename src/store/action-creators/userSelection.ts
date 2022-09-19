import { AppDispatch } from "..";
import { Language } from "../../models/states/userSelection";
import { userSelection } from "../slices/userSelection";

export const changeUserLanguage =
  (newSelectedLanguage: Language) => (dispatch: AppDispatch) => {
    dispatch(userSelection.actions.changeLanguage(newSelectedLanguage));
  };
