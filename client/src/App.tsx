import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Register from "./pages/Register";
import Movie from "./pages/Movie";
import SeatsContainer from "./pages/Seats/container";
import MyAccountContainer from "./pages/MyAccount/container";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/movie/:id" element={<Movie />} />
            <Route
              path="/seats/:movieId/:date/:time/:hallId"
              element={<SeatsContainer />}
            />
            <Route path="/my-account" element={<MyAccountContainer />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
