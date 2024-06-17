import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events, Home } from "./pages";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
