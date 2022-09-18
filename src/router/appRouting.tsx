import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import RoutesEntity from "./entity";

const AppRouting: FC = () => {
  return (
    <Routes>
      {RoutesEntity.publicRoutes.map((r) => (
        <Route key={r.id} path={r.path} element={r.component} />
      ))}
    </Routes>
  );
};

export default AppRouting;
