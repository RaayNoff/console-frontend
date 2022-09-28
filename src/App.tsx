import { FC, useEffect } from "react";
import { useActions } from "./hooks/useActions";
import AppRouting from "./router/appRouting";

const App: FC = () => {
  const { checkAccess } = useActions();

  useEffect(() => {
    checkAccess();
  }, []);

  return <AppRouting />;
};

export default App;
