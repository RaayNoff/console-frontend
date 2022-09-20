import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useActions } from "./useActions";

export const useDynamicPanelText = () => {
  const location = useLocation();
  const { changePath } = useActions();

  useEffect(() => {
    changePath(location.pathname);
  }, []);
};
