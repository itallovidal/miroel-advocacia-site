import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./app.layout.tsx";
import { Home } from "./home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AppLayout}>
          <Route path={"/"} Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
