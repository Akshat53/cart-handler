import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<Layout>{route.component}</Layout>}
                key={index}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
